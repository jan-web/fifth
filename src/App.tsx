import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CardContextProvider from "./store/CardContextProvider";

function App() {

  const [cartIsVisible, setCartIsVisible] = useState<boolean>(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  }
  const hideCartHandler = () => {
    setCartIsVisible(false);
  }

  return (
    <CardContextProvider>
      {cartIsVisible && <Cart onHideCard={hideCartHandler}/>}

      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </CardContextProvider>
  );
}

export default App;
