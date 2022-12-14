import React from "react";
import About from "./components/about/About";
import Clients from "./components/clients/Clients";
import Companies from "./components/companies/Companies";
import Hero from "./components/hero/Hero";
import Hotdeals from "./components/hotdeals/Hotdeals";
import Navbar from "./components/navbar/Navbar";
import Start from "./components/start/Start";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies microsoft='microsoft' entrepreneur='entrepreneur' fortune='fortune' business='business' mashable='mashable'/>
      <Hotdeals />
      <About />
      <Clients />
      <Start />
    </div>
  );
}

export default App;
