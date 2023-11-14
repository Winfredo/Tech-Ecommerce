import React from 'react';
import Header from './components/Header';
import Subheader from './components/SubHeader';
import Hero from './components/Hero';
import Gadgets from './components/Gadgets';
import Browse from './components/Browse';
import Arrival from './components/Arrival';
import PopularProducts from './components/PopularProducts';

function App() {
  return (
    <main className=''>
      <Header />
      <Subheader />
      <Hero />
      <Gadgets />
      <Browse />
      <Arrival />
      <PopularProducts />


      <div className='mt-[3rem] bg-[#fafafa] w-full h-[1000px]'>

      </div>
    </main>
  );
}

export default App;
