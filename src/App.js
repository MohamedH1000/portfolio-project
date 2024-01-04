import './App.css'
import NavBar from './components/navigationbar/navigationBar'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Medication from './pages/medication'
import HairCare from './pages/hairCare'
import SkinCare from './pages/skinCare'
import DailyEssentials from './pages/dailyEssentials'
import MomAndBaby from './pages/momAndBaby'
import MakeupAndAccessories from './pages/makeupAndAccessories'
import HealthCareDevices from './pages/healthCareDevices'
import VitaminsAndSupplements from './pages/vitaminsAndSupplements'
import SearchEngine from './components/searchengine/searchengine';
import Footer from './components/footer/footer';
import MainPage from './pages/mainPage';
import ScrollButton from './components/scrollButton/scrollButton';
import Login from './pages/login';
import Register from './pages/register';
import Cart from './pages/cart';
import CartNavBar from './components/CartNavBar/CartNavBar';
import Product from './components/product/Product';
import ShopContextProvider from './context/shopContext';
import SearchResult from './components/searchResult/SearchResult';
function App() {
  const [searchItem, setSearchItem] = useState('');
  const handleChange = (e)=> {
    const searchItem = e.target.value;
    setSearchItem(searchItem);
  }
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Navigate to='/eg-ar'/>}/>
            <Route path='/eg-ar'>
              <Route path='' element={<><NavBar/> <SearchEngine searchItem={searchItem} setSearchItem={setSearchItem} handleChange={handleChange}/><MainPage/><Footer/></>}/>
              <Route path='medication' element={<><NavBar/> <SearchEngine searchItem={searchItem} setSearchItem={setSearchItem} handleChange={handleChange}/><Medication/><Footer/></>}/>
              <Route path='hair-care' element={<><NavBar/> <SearchEngine searchItem={searchItem} setSearchItem={setSearchItem} handleChange={handleChange}/><HairCare/><Footer/></>}/>
              <Route path='skin-care' element={<><NavBar/> <SearchEngine searchItem={searchItem} setSearchItem={setSearchItem} handleChange={handleChange}/><SkinCare/><Footer/></>}/>
              <Route path='daily-essentials' element={<><NavBar/> <SearchEngine searchItem={searchItem} setSearchItem={setSearchItem} handleChange={handleChange}/><DailyEssentials/><Footer/></>}/>
              <Route path='mom-and-baby' element={<><NavBar/> <SearchEngine searchItem={searchItem} setSearchItem={setSearchItem} handleChange={handleChange}/><MomAndBaby/><Footer/></>}/>
              <Route path='makeup-and-accessories' element={<><NavBar/> <SearchEngine searchItem={searchItem} setSearchItem={setSearchItem} handleChange={handleChange}/><MakeupAndAccessories/><Footer/></>}/>
              <Route path='health-care-devices' element={<><NavBar/> <SearchEngine searchItem={searchItem} setSearchItem={setSearchItem} handleChange={handleChange}/><HealthCareDevices/><Footer/></>}/>
              <Route path='vitamins' element={<><NavBar/> <SearchEngine searchItem={searchItem} setSearchItem={setSearchItem} handleChange={handleChange}/><VitaminsAndSupplements/><Footer/></>}/>
              <Route path='login' element={<><NavBar/><SearchEngine searchItem={searchItem} setSearchItem={setSearchItem} handleChange={handleChange}/><Login/><Footer/></>}/>
              <Route path='product/:productid' element={<><NavBar/><SearchEngine searchItem={searchItem} setSearchItem={setSearchItem} handleChange={handleChange}/><Product/><Footer/></>}/>
              <Route path='register' element={<><NavBar/> <SearchEngine searchItem={searchItem} setSearchItem={setSearchItem} handleChange={handleChange}/><Register/><Footer/></>}/>
              <Route path='cart' element={<><div style={{backgroundColor:'var(--bg-color)'}}><CartNavBar/><Cart/></div></>}></Route>
              <Route path='search-result' element={<><NavBar/><SearchEngine searchItem={searchItem} setSearchItem={setSearchItem} handleChange={handleChange}/><SearchResult searchItem={searchItem} setSearchItem={setSearchItem}/><Footer/></>}></Route>
            </Route>
          </Routes>
          <ScrollButton/>
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;