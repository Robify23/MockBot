const express = require('express');
const fileRoutes = require('./routes/fileRoutes');
const cors = require('cors');
require('dotenv').config(); // Load environment variables



const app = express();

// Middleware to parse incoming JSON
app.use(express.json());
app.use(cors());
// File conversion API route
app.use('/api/files', fileRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: 'http://localhost:5000' })); 
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
