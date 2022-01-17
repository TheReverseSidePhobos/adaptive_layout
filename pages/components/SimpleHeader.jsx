import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

const SimpleHeader = () => {
  const [isPressedBurger, setisPressedBurger] = useState(false);

  const handleBurger = () => {
    setisPressedBurger(!isPressedBurger)
  }

  return (
    <header className="simpleHeader">
      <div className="container">
        <div className="nav">
          <img className="logo" src={'./img/logo.svg'} alt="logo" />
          <ul className="menu">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/smthElse">
                <a>SmthElse</a>
              </Link>
            </li>
            <li>
              <Link href="/coontacts">
                <a>Coontacts</a>
              </Link>
            </li>
          </ul>
          <a className="tel" href="tel: +1893819-23-64">
            +1893819-23-64
          </a>
          <button className="menu-open" onClick={handleBurger}>
            <img src="./img/menu.svg" alt="menu.svg" />
          </button>
        </div>
        {
        isPressedBurger &&
        <div className="burger">
          <div className="links">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/smthElse">
              <a>SmthElse</a>
            </Link>
            <Link href="/coontacts">
              <a>Contacts</a>
            </Link>
          </div>
        </div>
        }
      </div> 
    </header>
  );
};

export default SimpleHeader;
