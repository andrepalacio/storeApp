import React, { useState } from 'react';
import '../Styles/productView.css';
import { useParams, useNavigate } from 'react-router-dom';
import Data from '../data.json';
import Header from './header';

function ProductView(props) {
  const navigate = useNavigate();

  const idProduct = useParams();
  const [data] = useState(Data);
  const [quantity, setQuantity] = useState(1);

  let product = {};

  data.products.map((current) => {
    if (current.id == idProduct.id) {
      product = {
        id: current.id,
        name: current.name,
        price: current.price,
        description: current.description,
        amount: current.amount,
      };
    }
  });

  const handleIncrease = () => {
    if (quantity < product.amount) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleClick = () => {
    if (localStorage.getItem('accessToken')){
        navigate('/cart')
    }else{
        navigate('/login')
    }
}

  return (
    <div className="mainContainer">
      <div className="productContainer">
        <div className="productImage">
          <img
            src={require(`../Images/productsImages/product${product.id}/1.jpg`)}
            alt="productImage"
          />
        </div>

        <div className="productInfo">
          <div className="productName">
            <h1>{product.name}</h1>
          </div>
          <div className="productPrice">
            <h2>{product.price}</h2>
          </div>
          <div className="productAmount">
            <h3>Disponibles: {product.amount}</h3>
          </div>
          <div className="productQuantity">
            <button className="quantityButton" onClick={handleDecrease}>
              -
            </button>
            <input type="number" value={quantity} readOnly />
            <button className="quantityButton" onClick={handleIncrease}>
              +
            </button>
          </div>
          <div className="productButton">
            <button onClick={handleClick}>Agregar al Carrito</button>
          </div>
        </div>
      </div>

      <div className="productDescription">
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductView;
