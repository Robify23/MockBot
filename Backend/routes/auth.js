const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  const { username, email, password, university } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const user = new User({ username, email, password, university });
    await user.save();

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if the password matches
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
};



// Route to save EQ score
router.post('/saveEqscore', async (req, res) => {
  const { score } = req.body;

  // Assuming the token is passed as a Bearer token
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization token is missing or invalid' });
  }

  const token = authHeader.split(' ')[1];  // Extract the token part after 'Bearer'

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user by ID
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Ensure the score is a number before pushing
    const numericScore = parseFloat(score);  // Convert the score to a number

    if (isNaN(numericScore)) {
      return res.status(400).json({ message: 'Invalid score format' });
    }

    // Initialize eqScores if it doesn't exist
    if (!user.eqScores) {
      user.eqScores = [];
    }

    // Push the numeric score to the eqScores array
    user.eqScores.push({ score: numericScore });

    await user.save(); // Save the updated user document

    console.log("Updated eqScores: ", user.eqScores);  // Debug: log the updated scores
    res.json({ message: 'Score saved successfully' });
  } catch (error) {
    console.error('Error saving score:', error);

    // Differentiate between different types of errors
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' });
    }

    res.status(500).json({ message: 'Error saving score' });
  }
});

module.exports = router;
