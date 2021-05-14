import Input from "../../UI/Input";
import React, {useRef, useState} from 'react';
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) =>{

      const[amountIsValid,setAmountIsValid]= useState(true);

      const amountRef = useRef();

      const submitHandler= event =>{
            event.preventDefault();
            const enteredAmount = amountRef.current.value;
            const enteredAmountNumber = +enteredAmount;

            if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5){
                  setAmountIsValid(false);
                  return 
            }
            props.onAddToCart(enteredAmountNumber);
      };

      return(
            <form className={styles.form} onSubmit={submitHandler}>
                  <Input label="Amount" ref={amountRef}
                  input={{
                        id:"Amount_"+props.id,
                        type:"number",
                        min:"1",
                        max:"5",
                        step:"1",
                        defaultValue:"1"
                  }} />
                  
                  <button>Add to Cart</button>
                  {!amountIsValid && <p>Please Enter an Valid amount</p>}
            </form>
      );
};

export default MealItemForm;