import React from "react";
import About from "./components/about/About";
import Companies from "./components/companies/Companies";
import Hero from "./components/hero/Hero";
import Hotdeals from "./components/hotdeals/Hotdeals";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies microsoft='microsoft' entrepreneur='entrepreneur' fortune='fortune' business='business' mashable='mashable'/>
      <Hotdeals />
      <About />
    </div>
  );
}

export default App;
