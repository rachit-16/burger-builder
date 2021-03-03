import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const controls = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Salad', type: 'salad' }
];

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    <p>
      Current Price: <strong>&#8377;{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.added(ctrl.type)}
        removed={() => props.removed(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
  </div>
);

export default buildControls;
