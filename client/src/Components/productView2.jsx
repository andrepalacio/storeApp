import React, { useState } from 'react';
import '../Styles/productView.css';
import { Link, useParams } from 'react-router-dom';
import  Data from '../data.json';
import Header from './header'; 


import Images from '../Images/productsImages/product1/1.jpg';

function ProductView(props) {
  const idProduct = useParams();
  console.log(idProduct);

  const [data, setData] = useState(Data);

  let product = {};

  data.products.map((current) => {
    if (current.id == idProduct.id) {
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

  const [selectedImage, setSelectedImage] = useState(`product${product.id}/1.jpg`);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.value);
  };

  return (
    <div className='mainContainer'>
      <div className='productContainer'>
        <div className='productImage'>
          <div className='mainImage'>
            <img src={require(`../Images/productsImages/${selectedImage}`).default} alt='productImage' />
          </div>
          <div className='extraImages'>
            <form>
              {Array.from(Array(3).keys()).map((index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="image"
                    value={`product${product.id}/${index + 1}.jpg`}
                    checked={selectedImage === `product${product.id}/${index + 1}.jpg`}
                    onChange={handleImageChange}
                  />
                  <img
                    src={require(`../Images/productsImages/product${product.id}/${index + 1}.jpg`).default}
                    alt='productImage'
                  />
                </label>
              ))}
            </form>
          </div>
        </div>

        <div className='productInfo'>
          <div className='productName'>
            <h1>{product.name}</h1>
          </div>
          <div className='productPrice'>
            <h2>${product.price}</h2>
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