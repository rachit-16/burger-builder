import React from 'react';
import styles from './Button.module.css';

const button = (props) => {
  const classes = [styles.Button];
  classes.push(styles[props.btnType]);

  return (
    <button className={classes.join(' ')} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default button;
