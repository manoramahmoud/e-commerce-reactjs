import React from 'react';
import Annoucne from '../component/Annoucne';
import Navbar from '../component/Navbar';
import Newsletter from '../component/Newsletter';
import Slider from '../component/Slider';
import Categories from './../component/Categories';
import Footer from'./../component/Footer';
import Products from './../component/Products';
const Home = () => {
  return <div>
      <Annoucne/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
     
  </div>;
};

export default Home;