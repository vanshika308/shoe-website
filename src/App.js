
import './App.css';
import { useState } from 'react';
import CartButton from './components/Cart/CartButton';
import Cart from './components/Cart/Cart';
import InputForm from './components/InputForm/InputForm';
import ProductList from './components/ProductList/ProductList';
import ProductProvider from './store/ProductContext';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <ProductProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <CartButton onShowCart={showCartHandler} />
      <InputForm />
      <ProductList />
    </ProductProvider>
  );
}

export default App;
