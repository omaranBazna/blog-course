import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { useState } from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
function App() {
  const [isAuth,setIsAuth]=useState(false);
  return (
    <div >
      
     <Home  />
     <Login setIsAuth = {setIsAuth}/>
     <CreatePost />

    </div>
  );
}

export default App;
