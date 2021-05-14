import React,{ useContext } from "react";
import CartContext from "../../Store/Cart-Context";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import Modal from "./Modal";


const Cart = (props) =>{
      const cartCtx = useContext(CartContext);

      const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

      const cartItemAddHandler= (item) => {

      };

      const cartItemRemoveHandler=(id) => {

      };

      const cartItem = <ul className={styles['cart-items']}>
            {
                  cartCtx.items.map((item)=>
                  <CartItem 
                  key={item.id} 
                  name={item.name} 
                  amount={item.amount}
                  price={item.price} 
                  onAdd={cartItemAddHandler.bind(null,item)}
                  onRemove={cartItemRemoveHandler.bind(null,item.id)}      
                  />)
            }</ul>

      return(
            <Modal onClose={props.onClose}>
                  {cartItem}
                  <div className={styles.total}>
                        <span>Total Amount</span>
                        <span>{totalAmount}</span>
                  </div>
                  <div className={styles.actions}>
                        <button className={styles['button--alt']} onClick={props.onClose} >Close</button>
                        {cartCtx.items.length>0 &&   <button className={styles.button}>Order</button>}
                  </div>
            </Modal>
      );
};

export default Cart;