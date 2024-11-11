import '../Components/Signup.css';
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

export default  CompanyRegistration;

