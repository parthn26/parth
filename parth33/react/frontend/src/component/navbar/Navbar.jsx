import React from 'react';
import './navbar.css';
import logo from '../../assets/skull.jpg';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
   <nav className="navbar h-24 w-auto bg-black text-white flex items-center justify-between border-5">
<div className='logo'>
<img src={logo}  className="h-25 w-auto rounded p-2.5 m-2.5"/>

</div>

<div className='navsectins'>


    <ul className='links'>
<ul className="links flex gap-8 p-5 m-2.5">
   <li className='text-white text-3xl  '>
   <Link to="/">HOME</Link>
    </li>
    <li className='text-white text-3xl  '>
      <Link to="/about">ABOUT</Link>
    </li>
    <li className='text-white text-3xl  '>
      <Link to="/services">SERVICES</Link>
    </li>
    <li className='text-white text-3xl  '>
      <Link to="/contact">CONTACT</Link>
    </li>
</ul>

    </ul>
</div>

   </nav>

    </>
  )
}

export default Navbar