/*import '../Components/Signup.css';
import { Link } from 'react-router-dom';

function CompanyRegistration() {
  return (
    <div className="center">
    <div className="auth-main">
      <input type='checkbox' id='auth-chk' aria-hidden="true" />
      <div className="auth-signup">
        <form>
          <label htmlFor="auth-chk" aria-hidden="true" className="auth-label">Sign Up</label>
          <input type="text" name='text' placeholder='Username' required="" className="auth-input" />
          <input type="email" name='email' placeholder='Company Email' required="" className="auth-input" />
          <input type="password" name='pass' placeholder='Password' required="" className="auth-input" />
          <input type="Organization" name='pass' placeholder='Organiation Name' required="" className="auth-input" />
          <button className="auth-button"><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/company'>Sign Up</Link></button>
        </form>
      </div>
      <div className='auth-login'>
        <form>
          <label htmlFor="auth-chk" aria-hidden="true" className="auth-label">Login</label>
          <input type="email" name='email' placeholder='Email' required="" className="auth-input" />
          <input type="password" name='pass' placeholder='Password' required="" className="auth-input" />
          <button className="auth-button"><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Userpage'>Login</Link></button>
        </form>
      </div>
    </div></div>
  );
}

export default  CompanyRegistration;*/
import '../Components/Signup.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CompanyRegistration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    organizationName: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/compauth/signup', formData);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Save token if needed
        navigate('/company'); // Redirect to company page on successful signup
      }
    } catch (err) {
      setError(err.response?.data?.msg || 'Signup failed');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/compauth/login', {
        email: formData.email,
        password: formData.password,
      });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Save token if needed
        navigate('/company'); // Redirect to user page on successful login
      }
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="center">
      <div className="auth-main">
        <input type='checkbox' id='auth-chk' aria-hidden="true" />
        <div className="auth-signup">
          <form onSubmit={handleSignup}>
            <label htmlFor="auth-chk" aria-hidden="true" className="auth-label">Sign Up</label>
            <input type="text" name="username" placeholder="Username" required className="auth-input" value={formData.username} onChange={handleChange} />
            <input type="email" name="email" placeholder="Company Email" required className="auth-input" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" required className="auth-input" value={formData.password} onChange={handleChange} />
            <input type="text" name="organizationName" placeholder="Organization Name" required className="auth-input" value={formData.organizationName} onChange={handleChange} />
            <button type="submit" className="auth-button">Sign Up</button>
          </form>
        </div>
        <div className='auth-login'>
          <form onSubmit={handleLogin}>
            <label htmlFor="auth-chk" aria-hidden="true" className="auth-label">Login</label>
            <input type="email" name="email" placeholder="Email" required className="auth-input" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" required className="auth-input" value={formData.password} onChange={handleChange} />
            <button type="submit" className="auth-button">Login</button>
          </form>
        </div>
      </div>
     
    </div>
  );
}

export default CompanyRegistration;


