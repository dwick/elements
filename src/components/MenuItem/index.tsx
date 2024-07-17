import React from 'react';

import styles from './index.module.css';

type Props = {
  name: string;
  price: number;
  description: string;
};

export default function MenuItem({ name, price, description }: Props) {
  return (
    <div className={styles.menuItem}>
      <h3>
        <span className='item-name color-red'>{name}</span>
        <span className='item-price'>{price}</span>
      </h3>
      <p className='menu-item-description'>{description}</p>
    </div>
  );
}
