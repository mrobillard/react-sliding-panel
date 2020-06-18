import { useState } from 'react';

import MenuIcon from './menu-icon';
import SlidingPanel from './sliding-panel';

export default () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <MenuIcon clickHandler={toggleMenu} open={menuOpen} />
      <SlidingPanel clickHandler={toggleMenu} open={menuOpen}>
        <nav className={`${menuOpen ? 'active-text' : null}`}>
          <span>Option #1</span>
          <span>Option #2</span>
          <span>Option #3</span>
        </nav>
      </SlidingPanel>
      <style jsx>{`
        nav {
          padding-top: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0%;
          transition: opacity 1200ms ease-in-out;
        }

        nav.active-text {
          opacity: 100%;
        }

        span {
          height: 30px;
          text-decoration: none;
          color: #000;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          margin-bottom: 25px;
          transition: all 150ms ease-in-out;
        }

        span:hover {
          color: #93979f;
        }
      `}</style>
    </>
  );
};
