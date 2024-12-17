import React from 'react';
import Logo from "./Logo"

const Header = () => {
 
  return (
    <>
      <header>
       <Logo/>
      <nav>
        <ul>

          
          <li><a href="./home">Home</a></li>
          <li><a href="./products"> Products </a></li>
          <li><a href="./about">About</a></li>
          <li><a href="./contact"> Contact </a></li>
        </ul>
      </nav>
      </header>
    </>
  );
};

export default Header;
