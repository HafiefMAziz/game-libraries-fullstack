import React ,{useEffect,useState}from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
const Navbar = (props) => {
  const {loginStatus,loginCbHandler} = props
  const refresh = () => {
    window.location.href = "/";
  };
  const loginHandler = ()=>{
    loginCbHandler(true)
  }
  const logoutHandler = () => {
    Swal.fire(
      'Loading..',
      
    )
    localStorage.clear()
    refresh()
    loginCbHandler(false)
  }
  const [userData, setUserData] = useState(null);
  useEffect(() => {
 

  setUserData(localStorage.getItem("level"))
    return () => {
    
    }
  }, [])

  const [username, setUsername] = useState(null);
  useEffect(() => {
 

  setUsername(localStorage.getItem("username"))
    return () => {
    
    }
  }, [])
  
 
  return (
    <>
     <nav className="navbar">
        <div className="navbar-container container-nav">
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
             
            <ul className="menu-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              

              
              {userData === 'admin' ?

<li><Link to="/dashboard/games">Dashboard</Link></li> :
     userData === 'user' ? <li><Link to="/"> {username}</Link></li> :
     null
              }
                {loginStatus ? 
                  <li><a href="#" onClick={() => logoutHandler()}>Logout</a></li> :
                  <li><Link to="/login" onClick={()=> loginHandler()}>Login</Link></li>
              }
                
            </ul>
            <h1 className="logo">JaggerPlay</h1>
        </div>
    </nav>
    </>
  )
}

export default Navbar