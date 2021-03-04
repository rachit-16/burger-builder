import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const controls = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'salad' }
];

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    <p className={styles.currentPrice}>
      Current Price: <strong>&#8377;{props.price.toFixed(2)}</strong>
    </p>
    <div className={styles.controls}>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          ingredientPrice={props.ingredientPrices[ctrl.label.toLowerCase()]}
          label={ctrl.label}
          added={() => props.added(ctrl.type)}
          removed={() => props.removed(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
    </div>
    <button
      className={styles.OrderButton}
      onClick={props.ordered}
      disabled={!props.purchasable}
    >
      ORDER NOW!
    </button>
  </div>
);

export default buildControls;
