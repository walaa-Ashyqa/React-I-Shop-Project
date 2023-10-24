import { useState } from 'react'
 import Footer from './components/footer/Footer.jsx';
 import Header from './components/header/Header.jsx';
 import Navbar from './components/navbar/Navbar.jsx';
 import Products from './components/products/Products.jsx';

function App() {

  return (
    <>
    <Navbar/>
    <Header/>
    <Products/>
<Footer/>
    </>
  )
}

export default App
