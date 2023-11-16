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
    <main className="">
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

      <div className="mt-[3rem] bg-[#fafafa] w-full h-[1000px]"></div>
    </main>
  );
}

export default App;
