import './App.css';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom'; 

//COMPONENTS IMPORT
import Header from './Components/header';
import Products from './Components/Products';
// import ProductElement from './Components/productElement';
import Register from './Components/register';
import Login from './Components/login';
import ProductView from './Components/productView';
import Cart from './Components/cart';
import Administrator from './Components/administrator';
import Products2 from './Components/products2';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  const [accessToken, setAccessToken] = useState('');

  const [accessVis, setAccessVis] = useState('');
  //const accessVis = localStorage.getItem('accessVis')
  console.log(accessVis);

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    
    const storedVis = localStorage.getItem('accessVis');
    console.log(storedVis);

    if (storedToken) {
      setAccessToken(storedToken);
    }

     if (storedVis){
       setAccessVis(storedVis);
       console.log(accessVis);
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
          </> } 
        />
          
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/viewUser'/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin' element={<Administrator />} />
        <Route path='/viewProduct' element={<ProductView />} />
        <Route path='/product/:id' element={<ProductView />}/>
      </Routes>
    </Router>
  );
}

export default App;
