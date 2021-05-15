import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";
function App() {

  const [cartVisible,setCartVisible] = useState(false);

  const showCartHandler=()=>{
    setCartVisible(true);
  };

  const hideCartHandler =()=>{
    setCartVisible(false);
  };

  return (
    <CartProvider>
    {/* <Fragment> */}
    {cartVisible && <Cart onClose={hideCartHandler} />}
      <Header onCartVisible={showCartHandler}/>
      <main>
        <Meals/>
      </main>
      {/* </Fragment> */}
    </CartProvider>
  );
}

export default App;
