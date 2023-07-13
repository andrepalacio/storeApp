import '../Styles/products.css';
import ProductElement from './productElement'

import Data from '../data.json';

import '../Styles/products.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
 
const Products = () => {

    const {id} = useParams();
    const [data, setData] = useState(Data);
    console.log(id);

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
