import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
function App() {
  return (
    <div >
      
     <Home  />
     <Login />
     <CreatePost />

    </div>
  );
}

export default App;
