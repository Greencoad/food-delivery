import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/Cart-Context';
import styles from "../Layout/HeaderCartButton.module.css";

const HeaderCartButton = (props) =>{
      const [btnIsAnimated,setBtnIsAnimated] = useState(false);
      const cartCtx = useContext(CartContext);

      const {items} = cartCtx;
     
      const numberOfCartItems = items.reduce((curNumber, item) => {
            return curNumber + item.amount;
          }, 0);
        
          const btnClasses = `${styles.button} ${btnIsAnimated ? styles.bump : ''}`;
        
      useEffect(()=>{
            if(items.length === 0){
                  return;
            }
            setBtnIsAnimated(true);

            const timer = setTimeout(()=>{
                  setBtnIsAnimated(false)
            },(300));

            return () =>{
                  clearTimeout(timer);
            };
      },[items]);


      return (
            <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                  <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
            </button>
      );
};

export default HeaderCartButton;