import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import image from "../../assets/image/logo (1).png";
import Nav from "../header/Nav";
import { CgMenu, CgClose } from "react-icons/cg";

const MainHeader: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className, children }) => {
  return <header className={className}>{children}</header>;
};

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <MainHeader className="h-16 bg-blue-950 flex justify-between items-center p-3">
      {/* Logo and Title */}
      <div className="flex items-center">
        <NavLink to="/" className="flex items-center">
          <img className="h-10 w-10 object-contain" src={image} alt="Logo" />
          <span className="ml-3 text-xl text-white">FakeStore</span>
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <Nav className="hidden md:flex ml-auto text-sm" />

      {/* Mobile Menu Button */}
      <div className="md:hidden ml-auto text-white text-2xl">
        {menuOpen ? (
          <CgClose onClick={toggleMenu} />
        ) : (
          <CgMenu onClick={toggleMenu} />
        )}
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden mt-4">
          <Nav className="flex flex-col space-y-2 text-sm" />
        </div>
      )}
    </MainHeader>
  );
};

export default Header;
