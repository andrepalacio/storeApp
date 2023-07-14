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
import Administrator from './Components/administrator';
import Rechazado from './Components/rechazado';
import Confirmacion from './Components/confirmacion';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  const [accessToken, setAccessToken] = useState('');

  //const navigate = useNavigate()

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      setAccessToken(storedToken);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={  
          <>
            <Header 
            idUser="1"
            />
            <div className='main-container'>
              <Products />
            </div>
          </> } />
          
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/viewUser'/>
        <Route 
          path='/cart' 
          element={
            accessToken ? 
            <Cart />
            : <Navigate to="/"/>
            } />
        <Route path='/admin' element={<Administrator />} />
        <Route path='/viewProduct' element={<ProductView />} />
        <Route path='/product/:id' element={<ProductView />}/>
        <Route path='/cancel' element={<Rechazado />} />
        <Route path='/success' element={<Confirmacion />} />
      </Routes>
    </Router>
  );
}

export default App;
