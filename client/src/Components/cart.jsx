import React from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import '../Styles/cart.css';
import productImg from '../Images/productsImages/product1/1.jpg';
import Header from './header';

function CartItem() { 
  return (
    <>
      <div className='itemImage'>
        <img src={productImg} alt='product' />
      </div>
      <div className='itemInfo'>
        <h2>Product</h2>
        <p className='itemPrice'>$50.000</p>
      </div>

      <div className="cantidad">
        <button className="flecha" id="disminuir">&#8722;</button>
        <input className='cantidad' type="number" value="1" />
        <button className="flecha" id="aumentar">&#43;</button>
      </div>

        <button className='itemRemove'>Quitar</button>

    </>
  )
}

function Cart() {
  const handleButtonPress = async () => {
    const formData = {
      line_items: [
        {
          price_data: {
            product_data: {
              name: 'Carrito de productos',
              description: 'Cobro por productos en el carrito',
            },
            currency: 'usd',
            unit_amount: 20000, //200.00
          },
          quantity: 1
        }
      ]
    }
    try {
      axios.post('http://localhost:9000/checkout', formData)
        .then(res => {
          console.log(res.data.result);
          if(res.data.result) {
            window.location.href = res.data.result.url;
          }
        })
    } catch (error) {
      console.error(error);
    }
  };

  // axios.post('http://localhost:9000/checkout', formData)
  //   .then(res => {
  //     console.log(res.result)
  //   })
  return (
    <>
      <Header 
        idUser="1"
      />

      <div className='headerCard'>
        <h1 className='cartTitle'>Tu Carrito</h1>
      </div>

      <div className='parentContainer'>
        <div className='cart'>
          <div className='cartItems'>
            <CartItem />
            {/* <CartItem /> */}
          </div>
          <div className='cartTotal'>
            <span className='subTotal'>Subtotal</span>
            <span className='cartTotalPrice'>$50.000</span>
          </div>
          <button className="buttonCard" onClick={handleButtonPress}>Proceder a pagar</button>
        </div>
      </div>
    </>
  )
}

export default Cart