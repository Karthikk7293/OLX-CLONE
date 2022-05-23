import React, { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import {useHistory} from 'react-router-dom'
import './Signup.css';

export default function Signup() {
  const history = useHistory();
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState(0)
  const [password,setPassword]=useState('')
  const {firebase} = useContext(FirebaseContext)

const handleSubmit = (e)=>{
  e.preventDefault()

  firebase.auth().createUserWithEmailAndPassword(email,password).then((results)=>{
    results.user.updateProfile({displayName:username}).then(()=>{
      firebase.firestore().collection('users').add({
        id:results.user.uid,
        username:username,
        phone:phone
      }).then(()=>{
        history.push('/login');
      })
    })
  })
}


  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px"  src={Logo}></img>
        <form onSubmit={handleSubmit} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={username}
            onChange={((e)=>setUsername(e.target.value))}
          />
          <br />
          <label htmlFor="lname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="lname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="pname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="pname"
            name="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="mname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="mname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href='/login'>Login</a>
      </div>
    </div>
  );
}
