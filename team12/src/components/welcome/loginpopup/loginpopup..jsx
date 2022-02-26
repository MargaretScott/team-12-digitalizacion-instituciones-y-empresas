import './styles.css'
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';


export default function Login(){
  const [passwordShown, setPasswordShown] = useState(false)
  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }


  return(
      <Popup trigger={<button> Log in</button>} position="right center">
  <div>
    <input type="text" placeholder="username"></input>
    <input type={passwordShown ? "text" : "password"} placeholder='password'></input>
    <button onClick={togglePassword}>Show Password</button>
    <span><Link to='http://localhost:3000/%27%3E'>Forgot your password?</Link></span>
    <button><Link to='/testclient'>LOG IN</Link></button>
  </div>
</Popup>
  )
}