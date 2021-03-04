import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

const modal = (props) => {
  const classes = [styles.Modal];
  classes.push(props.show ? styles.show : styles.hide);

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={classes.join(' ')}>{props.children}</div>
    </Aux>
  );
};

export default modal;
