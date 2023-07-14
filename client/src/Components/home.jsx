import '../Styles/products.css';
import ProductElement from './productElement'

import Data from '../data.json';

import '../Styles/products.css';
import { useState } from 'react';

import axios from 'axios';


const Products = () => {

    axios.get("http//localhost:9000/productsList")
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
        
    


    const [data, setData] = useState(Data);
    
    return ( // Estructura HTML del componente.

    

    data.products.map ( product => (
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
