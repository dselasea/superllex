import React, { useState } from "react";
import About from "./components/about/About";
import Clients from "./components/clients/Clients";
import Companies from "./components/companies/Companies";
import Hero from "./components/hero/Hero";
import Hotdeals from "./components/hotdeals/Hotdeals";
import Navbar from "./components/navbar/Navbar";
import Start from "./components/start/Start";
import Footer from "./components/footer/Footer";
import items from './data'
import Menu from "./components/menu/Menu";
import Products from "./components/products/Products";

const allProducts = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [products, setProducts] = useState(allProducts)

  const filterProducts = (category) => {
    if(category === 'all'){
      setMenuItems(items)
      return
    }
    const newProducts = items.filter((item) => item.category === category)
    setMenuItems(newProducts)
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Companies microsoft='microsoft' entrepreneur='entrepreneur' fortune='fortune' business='business' mashable='mashable'/>
      <Hotdeals />
      <About />
      <Products products={products} filterProducts={filterProducts}/>
      <Menu items={menuItems} />
      <Clients />
      <Start />
      <Footer />
    </div>
  );
}

export default App;
