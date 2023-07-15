import '../Styles/products.css';
import ProductElement from './productElement'

//import Data from '../data.json';

import '../Styles/products.css';
import { useState , useEffect } from 'react';
import axios from 'axios';


const Products = () => {


    const [products,setData] = useState([]);

    const fetchData = async () => {
        try {
          const response = await fetch('https://the-lego-garage-server.onrender.com/productsList');
          const products = await response.json();
          setData(products);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        fetchData();
        }, []);
    

    
    return ( // Estructura HTML del componente.

    
    products.map ( product => (
        <div className='item'>
        <ProductElement 
            productName= {product.name}
            productPrice= {product.price}
            idProduct= {product.id}
            idImage= "1"
        />
        </div>
   )) 
);
}



export default Products; // Se exporta el componente    
