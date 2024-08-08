import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsCartPlus } from "react-icons/bs";

const Nav: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <nav className={className}>
      <ul className="navbar-list flex  space-x-10 m-auto text-white text-sm ">
        <li>
          <NavLink to="/" className="navbar-link hover:text-yellow-400">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navbar-link hover:text-yellow-400">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="navbar-link hover:text-yellow-400">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navbar-link hover:text-yellow-400">
            Contact Us
          </NavLink>
        </li>
        </ul>
        <ul className='object-right object-contain'>
        <li>
          <NavLink to="/contact" className="navbar-link hover:text-yellow-400  ">
          <BsCartPlus />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;