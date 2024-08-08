import React from 'react';
import { NavLink } from 'react-router-dom';
import image from "../../assets/image/logo (1).png";
import Nav from '../header/Nav'

const MainHeader: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children }) => {
  return (
    <header className={className}>
      {children}
    </header>
  );
};

const Header: React.FC = () => {
  return (
    <MainHeader className="h-16 bg-blue-950 flex flex-col justify-between p-3 ">
      <NavLink to="/" className= "flex items-center">
        <img className='h-10 w-10 object-contain' src={image} alt="Logo" />
        <span className='ml-3 text-xl text-white'>FakeStore</span>
        <Nav className='m-auto text-sm '/>
      </NavLink>
      
    </MainHeader>
  );
};

export default Header;