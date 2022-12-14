import React, { useState } from "react";
import About from "./components/about/About";
import Clients from "./components/clients/Clients";
import Companies from "./components/companies/Companies";
import Hero from "./components/hero/Hero";
import Hotdeals from "./components/hotdeals/Hotdeals";
import Navbar from "./components/navbar/Navbar";
import Start from "./components/start/Start";
import Footer from "./components/footer/Footer";
import data from './data'
import Menu from "./components/menu/Menu";


function App() {
  const [menuItems, setMenuItems] = useState(data)
  const [categories, setCategories] = useState([])

  console.log(menuItems)

  return (
    <div>
      <Navbar />
      <Hero />
      <Companies microsoft='microsoft' entrepreneur='entrepreneur' fortune='fortune' business='business' mashable='mashable'/>
      <Hotdeals />
      <About />
      <Menu menuItems={menuItems}/>
      <Clients />
      <Start />
      <Footer />
    </div>
  );
}

export default App;
