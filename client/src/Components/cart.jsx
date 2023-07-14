import axios from 'axios';
import { useState, useEffect } from 'react';
// import {Link, useNavigate} from 'react-router-dom';
import '../Styles/cart.css';
import productImg from '../Images/productsImages/product1/1.jpg';
import Header from './header';

function CartItem(cart) {
  // axios.get('http://localhost:9000/purchase');
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //cambiar por la cantidad de productos en stock
  const handleIncrease = () => {
    if (quantity < 15) {
      setQuantity(quantity + 1);
    }
  };

  const handleRemove = (id) => {
    //eliminar producto del carrito
    fetch('http://localhost:9000/cart/remove', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: cart,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
        <button className="flecha" id="disminuir" onClick={handleDecrease}>&#8722;</button>
        <input className='cantidad' type="number" value={quantity} />
        <button className="flecha" id="aumentar" onClick={handleIncrease}>&#43;</button>
      </div>

        <button className='itemRemove' onClick={handleRemove}>Quitar</button>

    </>
  )
}

function Cart() {
  const [cart, setCart] = useState([]);

  const getCart = () => {
    fetch('http://localhost:9000/cart')
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCart();
  }, []);

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
            <CartItem cart={cart}/>
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