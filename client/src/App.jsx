import { Route, Routes, useLocation } from 'react-router-dom';
// import { CartContextProvider } from './components/Context/CartContext';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import MakingTheWine from './components/MakingTheWine/MakingTheWine';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import './App.css';
import React from 'react';


function App() {

  const location = useLocation();
  const { pathname } = location;

  const boolAddComponent =
    pathname === '/' ||
    pathname === '/shop' ||
    pathname.startsWith('/item/') ||
    pathname === '/makingthewine' ||
    pathname === '/cart' ||
    pathname === '/checkout';

  return (
    <>
      {boolAddComponent && <Navbar />}
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/shop'} element={<ItemListContainer />} />
          <Route path={'/item/:id'} element={<ItemDetail />} />
          <Route path={'/makingthewine'} element={<MakingTheWine />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </>
  )
}

export default App
