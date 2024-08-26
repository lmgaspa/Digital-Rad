import React, { useState, MouseEvent } from 'react';
import styles from '../layouts/navbar.module.css';
import logo from '../assets/logo.webp';
import NavList from './NavList';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (event: MouseEvent<SVGElement>) => {
    event.preventDefault();
    setShowMenu(current => !current);
  };

  const menuClasses = `${styles.menuDropdown} ${showMenu ? styles.visible : styles.invisible}`;

  return (
    <section>
      <div className={styles.containerMenuNav}>
        <nav className={styles.navbar}>
          <img src={logo} alt="logo da empresa" />
          <NavList />
          <AiOutlineMenu onClick={handleClick} className={styles.menuIcon} />
        </nav>
      </div>
      <div className={menuClasses}>
        <NavList />
      </div>
    </section>
  );
}

export default Navbar;
