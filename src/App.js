import logo from './logo.svg';
import Product from './components/Product'
import './App.css';
import { Grid } from '@mui/material';
import { useState } from 'react';

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartItems, setCartItems] = useState({});

  function incrementOnAdd(price, name, quantity) {
    setTotalPrice(totalPrice+price);
    setTotalQuantity(totalQuantity+1);
    // add it to our cartItems if not present
    // else increment the value if it is already present
    setCartItems(prev => {
      return {...prev, [name]: quantity}
    })
  }

  function decrementOnSub(price, name, quantity) {
    setTotalPrice(totalPrice-price);
    setTotalQuantity(totalQuantity-1);
    if (quantity===0) {
      // Remove an element from this object
      setCartItems(prev => {
        let rest = {...prev};
        delete rest[name];
        return rest;
      });
    } else {
      setCartItems(prev => {
        return {...prev, [name]: quantity}
      })
    }
  }
  console.log("Outside", cartItems);
  
  return (
    <div className="App" style={{ padding: "10%" }}>
      <Grid container spacing={2} sx={{ marginBottom: "10vh" }}>
        <Grid item sx={{ display: 'flex' }}>
          <Product name="Harry Potter and The Prisoner of Azkaban" quantity={10} price={100} category="Book" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ullam nam eligendi voluptas reiciendis? Maxime nostrum illum esse perspiciatis corrupti aperiam delectus optio dolorum cumque. Aperiam, sapiente! Voluptates, consectetur in." seller="SellerA" incrementOnAdd={incrementOnAdd} decrementOnSub={decrementOnSub}/>
        </Grid>
        <Grid item sx={{ display: 'flex' }}>
          <Product name="Harry Potter and The Prisoner of Azkaban (pirated)" quantity={100} price={45} category="Book" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ullam nam eligendi voluptas reiciendis? Maxime nostrum illum esse perspiciatis corrupti aperiam delectus optio dolorum cumque. Aperiam, sapiente! Voluptates, consectetur in." seller="Jack Sparrow" incrementOnAdd={incrementOnAdd} decrementOnSub={decrementOnSub}/>
        </Grid>
      </Grid>

      <h1 style={{color: "white"}}>Cart</h1>
      <p style={{color: "white"}}>Total Price: {totalPrice}| Total Quantity: {totalQuantity}</p>
      {Object.keys(cartItems).map((item) => {
        // item : individual key inside our cartItems
        return <li className='cart-item'>{item}: {cartItems[item]}</li>
      })}

    </div>
  );
}

export default App;
