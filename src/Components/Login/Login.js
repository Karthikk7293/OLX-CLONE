import React, { useState,useContext } from 'react';
import {FirebaseContext} from '../../store/Context'
import {useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {firebase} =useContext(FirebaseContext)
  const history = useHistory();

  const handleLogin = (e)=>{
    e.preventDefault();
console.log(email,password);
firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
history.push('/')
}).catch((error)=>{
  alert(error.message)
  history.push('/login');
})
  }


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={((e)=>setEmail(e.target.value))}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={((e)=>setPassword(e.target.value))}
          />
          <br />
          <br />
          <button type='submit'>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
