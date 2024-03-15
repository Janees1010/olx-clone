import React, { useEffect,useContext } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import {AuthContext,FirebaseContext} from './store/FirebaseContext'
import Post from './store/PostContext'

function App() {
    const {user,setUser} = useContext(AuthContext)
    const {Firebase} = useContext(FirebaseContext)
     useEffect(()=>{
      Firebase.auth().onAuthStateChanged((user)=>{
        setUser(user)
      })
     })
  
  return (
    <div>
   <Post>
      <Router>
        <Route exact path='/'>
           <Home/>
        </Route>
        <Route exact path='/signup' >
           <Signup/>
        </Route>
        <Route path='/login' >
          <Login/>
        </Route>
        <Route path='/create' >
          <Create/>
        </Route>
        <Route exact path='/view' >
          <ViewPost/>
        </Route>
      </Router>
    </Post> 
    </div>
  );
}

export default App;
