import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {
  let classes = [styles.SideDrawer];
  classes.push(props.open ? styles.open : styles.close);

  return (
    <Aux>
      <Backdrop clicked={props.closed} show={props.open} />
      <div className={classes.join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
