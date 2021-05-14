import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/Cart-Context';

import styles from "../Layout/HeaderCartButton.module.css";

const HeaderCartButton = (props) =>{

      const cartCtx = useContext(CartContext);

      const numberOfItems = cartCtx.items.reduce((curNumber,item)=>{
            return(
                  curNumber+item.amount
            );
      },0);

      return <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                  <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfItems}</span>
      </button>;
};

export default HeaderCartButton;