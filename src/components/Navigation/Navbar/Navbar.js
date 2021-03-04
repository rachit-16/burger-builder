import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import styles from './Navbar.module.css';

const navbar = (props) => (
  <header className={styles.Navbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav className={styles.desktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default navbar;
