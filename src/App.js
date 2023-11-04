import logo from './logo.svg';
import Product from './components/Product'
import './App.css';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App" style={{ padding: "10%" }}>
      <Grid container spacing={2} sx={{ marginBottom: "10vh" }}>
        <Grid item sx={{ display: 'flex' }}>
          <Product name="Harry Potter and The Prisoner of Azkaban" quantity={10} price={99.9} category="Book" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ullam nam eligendi voluptas reiciendis? Maxime nostrum illum esse perspiciatis corrupti aperiam delectus optio dolorum cumque. Aperiam, sapiente! Voluptates, consectetur in." seller="SellerA" />
        </Grid>
        <Grid item sx={{ display: 'flex' }}>
          <Product name="Harry Potter and The Prisoner of Azkaban (pirated)" quantity={100} price={45} category="Book" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ullam nam eligendi voluptas reiciendis? Maxime nostrum illum esse perspiciatis corrupti aperiam delectus optio dolorum cumque. Aperiam, sapiente! Voluptates, consectetur in." seller="Jack Sparrow" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
