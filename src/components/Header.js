import React from "react";
import img from '../assets/logo.svg'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='header'>
      <img src={img} alt="lenadena shop ecommerce project" className='logo'/>
      <nav>
        <ul>
          <div>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about'>
                about
              </Link>
            </li>
            <li>
              <Link to='/products'>
                Products
              </Link>
            </li>
          </div>
          <div>
            <li>
              <Link to='/login'>
                Login
              </Link>
            </li>
            <li>
              <Link to='/cart'>
                Cart
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
