import React from 'react';
import styles from './Modal.module.css';

const modal = (props) => {
  const classes = [styles.Modal];

  classes.push(props.show ? styles.show : styles.hide);

  return <div className={classes.join(' ')}>{props.children}</div>;
};

export default modal;
