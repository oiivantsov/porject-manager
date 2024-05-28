import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.title}>Task Manager</h1>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/projects" className={styles.navLink}>Projects</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/login" className={styles.navLink}>Exit</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
