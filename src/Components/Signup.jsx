/*import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="main">
      <input type='checkbox' id='chk' aria-hidden="true"/>
      <div className="signup">
        <form>
          <label for="chk" aria-hidden="true">Sign Up</label>
          <input type="text" name='text' placeholder='Username' required=""/>
          <input type="email" name='email' placeholder='Email' required=""/>
          <input type="password" name='pass' placeholder='Password' required=""/>
          <select name="uni" placeholder="University Name" required>
            <option value="harvard">Riphah International University</option>
            <option value="mit">NUST University</option>
            <option value="stanford">COMSATS University</option>
            <option value="oxford">GIKI University</option>
            <option value="cambridge">CUST University</option>
          </select>    
          <button><Link to='/userpage'>Sign Up</Link></button>
        </form>
          

        


      </div>
      <div className='login'>
      <form>
          <label for="chk" aria-hidden="true">Login</label>
          <input type="email" name='email' placeholder='Email' required=""/>
          <input type="password" name='pass' placeholder='Password' required=""/>
          <button><Link to='/Userpage'>Login</Link></button>

        </form>
      </div>


    </div>
   );
}

export default Signup;*/
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="auth-main">
      <input type='checkbox' id='auth-chk' aria-hidden="true" />
      <div className="auth-signup">
        <form>
          <label htmlFor="auth-chk" aria-hidden="true" className="auth-label">Sign Up</label>
          <input type="text" name='text' placeholder='Username' required="" className="auth-input" />
          <input type="email" name='email' placeholder='Email' required="" className="auth-input" />
          <input type="password" name='pass' placeholder='Password' required="" className="auth-input" />
          <select name="uni" className="auth-select" required>
            <option value="harvard">Riphah International University</option>
            <option value="mit">NUST University</option>
            <option value="stanford">COMSATS University</option>
            <option value="oxford">GIKI University</option>
            <option value="cambridge">CUST University</option>
          </select>
          <button className="auth-button"><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/userpage'>Sign Up</Link></button>
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
    </div>
  );
}

export default Signup;

