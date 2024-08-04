import React from 'react'


type HeaderProps = {};
const Header:React.FC<HeaderProps> = () => {
  return (
   <header className='header'>
        <nav className='navbar  bg-blue-400 p-8 text-black h-10 shadow-md fixedn w-full flex justify-between items-center'>
            <div className='navbar-logo'>
                <a href='/'>MyLogo</a>
            </div>
            <ul className='navbar-menu flex justify-center gap-6'>
                <li className='navbar-items'>
                    <a href='/'>Home</a>
                </li>
                <li className='navbar-items'>
                    <a href='/about'>About</a>
                </li>
                <li className='navbar-items'>
                    <a href='/products'>Products</a>
                </li>
                <li className='navbar-items'>
                    <a href='/contect'>Contact Us</a>
                </li>
                <form className='search-form  rounded-full'>
                    <input type="text" placeholder='Search...' />
                </form>
                <li className='navbar-items'>
                    <a href='/cart'>Cart</a>
                </li>

            </ul>

        </nav>
   </header>
  )
}

export default Header
