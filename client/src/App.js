import './App.css';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom'; 

//COMPONENTS IMPORT
import Header from './Components/header';
import Products from './Components/home';
// import ProductElement from './Components/productElement';
import Register from './Components/register';
import Login from './Components/login';
import ProductView from './Components/productView';
import Cart from './Components/cart';
import Stock from './Components/stock';
import Administrator from './Components/administrator';
import Products2 from './Components/products2';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  const [accessToken, setAccessToken] = useState('');

  const [accessVis, setAccessVis] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    
    const storedVis = localStorage.getItem('accessVis');

    if (storedToken) {
      setAccessToken(storedToken);
    }

    if (storedVis){
      setAccessVis(storedVis);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route 
          path='/' 
          element={
          <>
            <Header 
            idUser="1"
            />
            <div className='main-container'>
              <Products />
            </div>
          </> } />
          <Route
            path="/Home/:id"
            element={
              accessToken ? (
               <>
                <Header />
                <div className="main-container"> 
                  <Products2 />
                  <h1>Ya estás registrado</h1>
                </div>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/viewAdmin'/>
        <Route path='/viewUser'/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin' element={<Administrator />} />
        <Route path='/viewProduct' element={<ProductView />} />
        <Route path='/product/:id' element={<ProductView />}/>

        <Route path='/admin' element={<Administrator />}/>
      </Routes>
    </Router>
  );
}

export default App;
