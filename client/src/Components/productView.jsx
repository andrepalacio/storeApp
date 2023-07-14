import React from 'react';
import '../Styles/productView.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import  Data from '../data.json';
import { useState, useEffect } from 'react';
import Header from './header';


function ProductView(props) {

    const navigate = useNavigate();

    const idProduct = useParams();
    console.log(idProduct);

    const [data,setData] = useState(Data);

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
    
    const handleClick = () => {
        if (localStorage.getItem('accessToken')){
            navigate('/cart')
        }else{
            navigate('/login')
        }
    }
    

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
    
    const [selectedImage, setSelectedImage] = useState(image1);

    const handleImageChange = (event) => {
        setSelectedImage(event.target.value);
      };

      const [quantity, setQuantity] = useState(1);

    return( 
        <>   
       
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
                        
                            <button onClick={handleClick}>Agregar al Carrito</button>
                    </div>

                </div>
            </div>

           

        </div>
        </>
    );
    

}

export default ProductView;