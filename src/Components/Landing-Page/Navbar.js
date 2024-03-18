import React from 'react'
import Login from '../Authentication/Login';
import {Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className='nav-items'>
            <div className='header'>
                {/* <img src={logo}/> */}
        <h1 className='th'>Metropolitan Hospital Sacco</h1>
        </div>
        <div className='nav-buttons'>
        <nav className='nav' >
           <ul>
          <li><Link to ="/Login"><button className='bl'>Login</button></Link></li>  
          <li> <Link to="/SignUp"> <button className='bs'>Create an account</button></Link></li> 
          </ul> 
            </nav>
            </div>
        </div>
        <div>
                <h2 className='tw'>Metropolitan Hospital Sacco Portal</h2>
            </div>
        <div></div>
        <Login/>
    </div>
  )
}

export default Navbar