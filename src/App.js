import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Product from './Product';
import ContactUs from './ContactUs';
import HowToUse from './How_to_use';


const products = [
  { brand: 'tfs', name: "tomato", price: 1000, img_url: 'https://i.pinimg.com/736x/3e/16/82/3e16822dc9b7d4c95cd08368db177688--nail-art-ideas-love.jpg' },
  { brand: 'tfs', name: "aloe", price: 1000, img_url: 'https://i.pinimg.com/736x/3e/16/82/3e16822dc9b7d4c95cd08368db177688--nail-art-ideas-love.jpg' },
  { brand: 'tfs', name: "teatree", price: 1000, img_url: 'https://i.pinimg.com/736x/3e/16/82/3e16822dc9b7d4c95cd08368db177688--nail-art-ideas-love.jpg' },
  { brand: 'tfs', name: "blue berry", price: 1000, img_url: 'https://i.pinimg.com/736x/3e/16/82/3e16822dc9b7d4c95cd08368db177688--nail-art-ideas-love.jpg' },
  { brand: 'tfs', name: "honey", price: 1000, img_url: 'https://i.pinimg.com/736x/3e/16/82/3e16822dc9b7d4c95cd08368db177688--nail-art-ideas-love.jpg' }
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {products.map((products, index) =>
          <Product key={index} title={products.name} price={products.price} img_url={products.img_url} />
        )}

        <HowToUse/>
        <ContactUs />
      </div>
    )
  }
}




export default App;
