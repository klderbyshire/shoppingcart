import "./App.css";
import ProductTile from "../ProductTile/ProductTile";
import { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import Basket from "../Basket/Basket";

function App() {
  const [data, setData] = useState();
  const [cart, setCart] = useState();
  const [basket, setBasket] = useState([]);

  //Why is this firing twice? Can we makea conditional rendor so it doesn't?

  useEffect(() => {
    async function getData() {
      let response = await fetch("https://fakestoreapi.com/products");
      let dataResponse = await response.json();
      setData(dataResponse);
    }
    getData();
  }, []);

  function addToBasket(id) {
    console.log(id);
    let foundItem = data.find((item) => {
      if (item.id === id) {
        return item;
      }
    });
    setBasket((basket) => [...basket, foundItem]);
  }
  console.log(basket);

  return (
    <div className="App">
      <h3>Funky-Fit</h3>
      <Drawer anchor="right" open={cart} onClose={() => setCart(false)}>
        Your Shopping Cart!
        <Basket basket={basket} />
      </Drawer>
      <button onClick={() => setCart(true)}>Open cart</button>
      <div className="product-display">
        {data
          ? data.map((item) => {
              return (
                <ProductTile
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  addToBasket={addToBasket}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default App;

// fetch the data from the API, use Effect to get the data on page load

// save the data in a useState

// map over the data and create the new tiles
