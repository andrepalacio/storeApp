import React from 'react';
import '../Styles/productView.css';
import { useParams, useNavigate } from 'react-router-dom';
import  Data from '../data.json';
import { useState, useEffect } from 'react';
// import Header from './header';


function ProductView(props) {

    const idProduct = useParams();
    console.log(idProduct);

    const [data] = useState(Data);
    const [quantity, setQuantity] = useState(1);

    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);

    const handleImportImages = async () => {
      const module1 = await import(`../Images/productsImages/product${idProduct.id}/1.jpg`);
      const module2 = await import(`../Images/productsImages/product${idProduct.id}/2.jpg`);
      const module3 = await import(`../Images/productsImages/product${idProduct.id}/3.jpg`);

      setSelectedImage(module1.default);
      setImage1(module1.default);
      setImage2(module2.default);     
      setImage3(module3.default);
    };
    

    let product = {};
    useEffect(() => {
        handleImportImages();
    }, []);
    

    //-------------------------------------------------------------------------
    const [products, setProducts] = useState([]);

    const fetchProduct = async () => {
        try {
          const response = await fetch(`http://localhost:9000/productsList/${idProduct.id}`);
          const products = await response.json();
          setProducts(products[0]);
          console.log(products[0]);
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
        fetchProduct();
        }, []);



    //-------------------------------------------------------------------------

    const handleClick = () => {
        if (localStorage.getItem('accessToken')){
            //Agregar al carrito
            const userId = JSON.parse(localStorage.getItem('id'));
            const productId = idProduct.id;
            const productAmount = document.querySelector('input[type="number"]').value;
            const productData = {
                "userId": userId,
                "productId": productId,
                "productAmount": productAmount
            };
            console.log(productData);
            fetch('http://localhost:9000/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            }).catch(error => {
                console.log(error);
            });
            navigate('/cart')
        }else{
            navigate('/login')
        }
    });

    const [selectedImage, setSelectedImage] = useState(image1);

    const handleImageChange = (event) => {
        setSelectedImage(event.target.value);
      };

      const handleDecrease = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };
    
      const handleIncrease = () => {
        if (quantity < product.amount) {
          setQuantity(quantity + 1);
        }
      };

    return(
        <>
        {/* <Header /> */}
        <div className='mainContainer'>
            <form>
                <input type='radio' id='Image1' name='image' defaultChecked value={image1} onChange={handleImageChange} />
                <input type='radio' id='Image2' name='image' value={image2} onChange={handleImageChange} />
                <input type='radio' id='Image3' name='image' value={image3} onChange={handleImageChange} />
            </form>


            <div className='productContainer'>

                <div className='productImage'>
                    <div className='mainImage'>
                        <img src={(selectedImage)} alt='productImage' />
                    </div>
                    <div className='extraImages'>
                        <label htmlFor='Image1'>
                            <img src={require(`../Images/productsImages/product${idProduct.id}/1.jpg`)} alt='productImage' />
                        </label>
                        <label htmlFor='Image2'>
                            <img src={require(`../Images/productsImages/product${idProduct.id}/2.jpg`)} alt='productImage' />
                        </label>
                        <label htmlFor='Image3'>
                            <img src={require(`../Images/productsImages/product${idProduct.id}/3.jpg`)} alt='productImage' />
                        </label>
                    </div>
                </div>

                <div className='productInfo'>
                    <div className='productName'>
                        <h1>{products.name}</h1>
                    </div>
                    <div className='productDescription'>
                        <p>{products.description}</p>
                    </div>
                    <div className='productPrice'>
                        <h2>${products.price}</h2>
                    </div>
                    <div className='productAmount'>
                        <h3>Disponibles: {products.amount}</h3>
                    </div>
                    <div className="productQuantity">
                            <button onClick={handleDecrease}>-</button>
                            <span>{quantity}</span>
                            <button onClick={handleIncrease}>+</button>
                    </div>
                    <div className='productButton'>
                        <div></div>
                        <input type='number'/>
                        <button onClick={handleClick}>Agregar al carrito</button>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
    

}

export default ProductView;