import React,{useEffect,useContext} from 'react';
import Post from './store/PostContext';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {AuthContext, FirebaseContext} from './store/Context'
;

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'

function App() {
  const {user,setUser} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    // console.log(user);
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })

  });
  
  return (
    <div>
      <Post>
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/create'>
          <Create/>
        </Route>
        <Route path='/view'>
          <View/>
        </Route>
      </Router>
      </Post>
    </div>
  );
}

export default App;
