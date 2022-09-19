import React, { useState, useEffect } from "react";

import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Search from "./components/Search";


function App() {
  const products = [{
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8900,
    imageUrl: "/img/image3.jpg"
  }]
  // const [products, setProducts] = useState([])
  
  
  // useEffect(() => { /// !!!
  //   setProducts([])
  // }, products)

  const addToCart = () => {
    
}

  
  return (
    
    <div className="wrapper">

      <div style={{ display: "none" }} className="overlay">
        <Drawer />
      </div>
     
      <Header />

      <div className="content">
        <div className="section">
          <h1>Все кроссовки</h1>
          <Search />
        </div>
        

        <div className="sneakers">       
          
          { products.map( (product) => {
            return <Card name={product.name} price={product.price} imageUrl={product.imageUrl} onClick={addToCart}/>
          }) }        

        </div>      

      </div>
    </div>
  );
}

export default App;
