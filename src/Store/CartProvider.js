import {
      useReducer
} from "react";
import CartContext from "./Cart-Context";

const defaultCartState = {
      items: [],
      totalAmount: 0,

};

const cartReducer = (state, action) => {
      if (action.type === 'ADD_CARTITEM') {
           
            const existingCartItemIndex = state.items.findIndex(
                  (item) => item.id === action.item.id
                  );
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;

            if(existingCartItem){
                  const updatedItem = {
                        ...existingCartItem,
                        amount: existingCartItem.amount + action.item.amount
                  };
                  updatedItems = [...state.items];
                  updatedItems[existingCartItemIndex] = updatedItems;
                  }
                  else{
                        updatedItems= state.items.concat(action.item);
                  }

            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            return {
                  item: updatedItems,
                  totalAmount: updatedTotalAmount
            };
      }
      return defaultCartState;
};

const CartProvider = (props) => {

      const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

      const addItemHandler = (item) => {
            dispatchCartAction({
                  type: 'ADD_CARTITEM',
                  item: item
            });
      };

      const removeItemHandler = (id) => {
            dispatchCartAction({
                  type: 'REMOVE_CARTITEM',
                  id: id
            });
      };

      const cartContext = {
            item: cartState.items,
            totalAmount: cartState.totalAmount,
            addItem: addItemHandler,
            removeItem: removeItemHandler
      }

      return ( <CartContext value = {cartContext} >
            { props.children} 
            </CartContext>
      );
};

export default CartProvider;