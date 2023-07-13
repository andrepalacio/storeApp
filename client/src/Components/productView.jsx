import React from 'react';
import '../Styles/productView.css';
import { Link, useParams } from 'react-router-dom';
import  Data from '../data.json';
import { useState } from 'react';
import Header from './header'; 
import ImageSlider from './ImageSlider';

import Images from '../Images/productsImages/product1/1.jpg';



function ProductView(props) {

    const idProduct = useParams();
    console.log(idProduct);

    const [data,setData] = useState(Data);

    let product = {};

   
    data.products.map((current) => {
        if (current.id == idProduct.id){
            product = {
                "id": current.id,
                "name": current.name,
                "price": current.price,
                "description": current.description,
                "amount": current.amount
            };
            console.log(product);
        }
    });

    const slides = [ 
        {src:`https://img.freepik.com/foto-gratis/coche-sedan-deportivo-lujo-blanco-pie-rastro-carrera-vista-frontal_114579-1161.jpg`, title: 'Image 1'},
        {src:`../Images/productsImages/product${product.id}/2.jpg`, title: 'Image 2'},
        {src:`../Images/productsImages/product${product.id}/3.jpg`, title: 'Image 3'}
    ]

    console.log(slides);
        
    return(
        <div className='mainContainer'>


            <div className='productContainer'>
                {/* <div className='imageSlider'>
                    <ImageSlider slides={slides} />
                </div> */}
                <div className='productImage'>
                    <img src={require(`../Images/productsImages/product${product.id}/1.jpg`)} alt='productImage' />
                </div>
                {/* <div className='productImage'>
                    <img src={import slides[0].src} alt='productImage' />
                </div> */}


                <div className='productInfo'>
                    <div className='extraImages'>
                        <img src={require(`../Images/productsImages/product${product.id}/2.jpg`)} alt='productImage' />
                        <img src={require(`../Images/productsImages/product${product.id}/3.jpg`)} alt='productImage' />
                    </div>
                    <div className='productName'>
                        <h1>{product.name}</h1>
                    </div>
                    <div className='productPrice'>
                        <h2>{product.price}</h2>
                    </div>
                    <div className='productAmount'>
                        <h3>Disponibles: {product.amount}</h3>
                    </div>
                    <div className='productButton'>
                        <div></div>
                        <input type='number'/>
                        <Link to={`/cart`} className='ProductLink'>
                            <button>Agregar al Carrito</button>
                        </Link>
                    </div>

                </div>
            </div>

            <div className='productDescription'>
                    <p>{product.description}</p>
            </div>

        </div>
    );
    

}

export default ProductView;