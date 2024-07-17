import React from "react";
import Header from "./components/Header";
import Subheader from "./components/SubHeader";
import Hero from "./components/Hero";
import Gadgets from "./components/Gadgets";
import Browse from "./components/Browse";
import Arrival from "./components/Arrival";
import PopularProducts from "./components/PopularProducts";
import Discount from "./components/Discount";
import SubFooter from "./components/SubFooter";
import Footer from "./components/Footer";


function App() {
  return (
    <main>
      <Header />
      <Subheader />
      <Hero />
      <Gadgets />
      <Browse />
      <Arrival />
      <PopularProducts />
      <Discount />
      <SubFooter />
      <Footer />
    </main>
  );
}

export default App;
