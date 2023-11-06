import logo from './logo.svg';
import Product from './components/Product'
import './App.css';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useState } from 'react';

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartItems, setCartItems] = useState({});

  function incrementOnAdd(price, name, quantity) {
    setTotalPrice(totalPrice + price);
    setTotalQuantity(totalQuantity + 1);
    // add it to our cartItems if not present
    // else increment the value if it is already present
    setCartItems(prev => {
      return { ...prev, [name]: {
        quantity: quantity,
        price: price
      } }
    })
  }

  function decrementOnSub(price, name, quantity) {
    setTotalPrice(totalPrice - price);
    setTotalQuantity(totalQuantity - 1);
    if (quantity === 0) {
      // Remove an element from this object
      setCartItems(prev => {
        let rest = { ...prev };
        delete rest[name];
        return rest;
      });
    } else {
      setCartItems(prev => {
        return { ...prev, [name]: {
          quantity: quantity,
          price: price
        } }
      })
    }
  }

  return (
    <div className="App" style={{ padding: "10%" }}>
      <Grid container spacing={2} sx={{ marginBottom: "10vh" }}>
        <Grid item sx={{ display: 'flex' }}>
          <Product name="Harry Potter and The Prisoner of Azkaban" quantity={10} price={100} category="Book" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ullam nam eligendi voluptas reiciendis? Maxime nostrum illum esse perspiciatis corrupti aperiam delectus optio dolorum cumque. Aperiam, sapiente! Voluptates, consectetur in." seller="SellerA" incrementOnAdd={incrementOnAdd} decrementOnSub={decrementOnSub} />
        </Grid>
        <Grid item sx={{ display: 'flex' }}>
          <Product name="Harry Potter and The Prisoner of Azkaban (pirated)" quantity={100} price={45} category="Book" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ullam nam eligendi voluptas reiciendis? Maxime nostrum illum esse perspiciatis corrupti aperiam delectus optio dolorum cumque. Aperiam, sapiente! Voluptates, consectetur in." seller="Jack Sparrow" incrementOnAdd={incrementOnAdd} decrementOnSub={decrementOnSub} />
        </Grid>
      </Grid>

      <>
        {totalQuantity !== 0 ? <Grid container flexDirection={"column"}>
          <Grid item>
            <Typography variant="h1" className='cart-item'>Cart</Typography>
          </Grid>
          <Grid item>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Item name</TableCell>
                    <TableCell>Unit Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.keys(cartItems).map((item) => {
                    return (
                      <TableRow
                        key={item}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {item}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {cartItems[item].price}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {cartItems[item].quantity}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {cartItems[item].price * cartItems[item].quantity}
                        </TableCell>
                      </TableRow>
                    )
                  })}
                  <TableRow key={"total"} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>Total</TableCell>
                    <TableCell></TableCell>
                    <TableCell>{totalQuantity}</TableCell>
                    <TableCell>{totalPrice}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid> : <></>}
      </>

    </div>
  );
}

export default App;
