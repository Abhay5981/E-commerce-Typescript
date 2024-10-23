import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsCart } from "react-icons/bs"; 
import { CgClose, CgMenu } from 'react-icons/cg';

const Nav: React.FC<{ className?: string }> = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={className}>
      <div className="flex justify-between items-center w-full">
        {/* Desktop Menu */}
        <ul className="navbar-list space-x-10 text-white text-sm hidden md:flex">
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

        <div className="m-2 p-2">
          <NavLink to="/cart" className="navbar-link hover:text-yellow-400 text-white">
            <BsCart />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {menuOpen ? (
            <CgClose className="text-2xl cursor-pointer" onClick={toggleMenu} />
          ) : (
            <CgMenu className="text-2xl cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="navbar-list flex flex-col space-y-4 mt-4 text-white text-sm md:hidden">
          <li>
            <NavLink to="/" className="navbar-link hover:text-yellow-400" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link hover:text-yellow-400" onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link hover:text-yellow-400" onClick={toggleMenu}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link hover:text-yellow-400" onClick={toggleMenu}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link hover:text-yellow-400" onClick={toggleMenu}>
              Cart
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
