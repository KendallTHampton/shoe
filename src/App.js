import {useState} from 'react';
import './App.css';
import Home from './components/Layout/Home';
import Navbar from './components/Nav/Navbar';
import Shoes from './components/Shoe/Shoes';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App()
{



  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () =>
  {
    setCartIsShown(true)
  }

  const hideCartHandler = () =>
  {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown &&
        <Cart
          onHideCart={hideCartHandler}
        />
      }
      <Navbar

        onShowCart={showCartHandler}
      />
      <Home />
      <Shoes

      />
    </CartProvider>
  );
}

export default App;
