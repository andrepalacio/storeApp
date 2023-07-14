import React, { useState } from 'react';
import '../Styles/productView.css';
import { Link, useParams } from 'react-router-dom';
import Data from '../data.json';

function ProductView(props) {
  const idProduct = useParams();
  const [data, setData] = useState(Data);
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
            <div></div>
            <Link to={`/cart`} className="ProductLink">
              <button>Agregar al Carrito</button>
            </Link>
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
