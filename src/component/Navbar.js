import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
     <nav className='navbar'>
                  <a className='navbar-title fw-bold ' href="/">Smiley</a>
                    <ul className='navbar-list'>
                      
                      <li><Link className="home fw-bold " to="/">Home</Link></li>
                      <li><Link className="contact fw-bold " to="/contact">Contact Us</Link></li>
                      
                      </ul>
                
                </nav>
    </div>
  );
}

export default Navbar;
