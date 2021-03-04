import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.log('[Modal.js] componentDidUpdate');
  }

  render() {
    const classes = [styles.Modal];
    classes.push(this.props.show ? styles.show : styles.hide);

    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={classes.join(' ')}>{this.props.children}</div>
      </Aux>
    );
  }
}

export default Modal;
