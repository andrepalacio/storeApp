import React from 'react';
import '../Styles/productView.css';
import { Link, useParams } from 'react-router-dom';
import  Data from '../data.json';
import { useState } from 'react';
import Header from './header'; 
import ImageSlider from './ImageSlider';


function ProductView(props) {

    const idProduct = useParams();
    console.log(idProduct);

    const [data,setData] = useState(Data);

    let product = {};

   
    data.products.map((current) => {
        if (current.id === idProduct.id){
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
        {url:"https://drive.google.com/drive/folders/15Bc-cApxE6O2jXlzPV40-cr34njqUczm?usp=sharing", title: 'Image 1'},
        {url:`https://drive.google.com/drive/folders/15Bc-cApxE6O2jXlzPV40-cr34njqUczm?usp=sharing`, title: 'Image 2'},
        {url:`https://drive.google.com/drive/folders/15Bc-cApxE6O2jXlzPV40-cr34njqUczm?usp=sharing`, title: 'Image 3'},
    ]

    console.log(slides);
        
    return(
        <div className='mainContainer'>
            <div className='productContainer'>
                {/* <div className='imageSlider'>
                    <ImageSlider slides={slides}/>
                </div> */}
                <div className='productImage'>
                    <img src={require(`../Images/productsImages/product${product.id}/1.jpg`)} alt='productImage' />
                </div>

                <div className='productInfo'>
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
                        <Link to={`/login`} className='ProductLink'>
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

// import React from 'react';
// import '../Styles/productView.css';
// import { Link, useParams } from 'react-router-dom';
// import Data from '../data.json';
// import { useState } from 'react';
// import Header from './header';
// import ImageSlider from './ImageSlider';

// import productImage1 from '../Images/productsImages/product1/1.jpg';
// import productImage2 from '../Images/productsImages/product2/1.jpg';
// // Importa las demás imágenes de los productos según sea necesario

// const productImages = {
//   1: productImage1,
//   2: productImage2,
//   // Asigna las demás imágenes de los productos según sea necesario
// };

// function ProductView(props) {
//   const idProduct = useParams();
//   console.log(idProduct);

//   const [data, setData] = useState(Data);

//   let product = {};

//   data.products.map((current) => {
//     if (current.id === idProduct.id) {
//       product = {
//         id: current.id,
//         name: current.name,
//         price: current.price,
//         description: current.description,
//         amount: current.amount,
//       };
//       console.log(product);
//     }
//   });

//   const slides = [
//     { url: 'https://drive.google.com/drive/folders/15Bc-cApxE6O2jXlzPV40-cr34njqUczm?usp=sharing', title: 'Image 1' },
//     { url: 'https://drive.google.com/drive/folders/15Bc-cApxE6O2jXlzPV40-cr34njqUczm?usp=sharing', title: 'Image 2' },
//     { url: 'https://drive.google.com/drive/folders/15Bc-cApxE6O2jXlzPV40-cr34njqUczm?usp=sharing', title: 'Image 3' },
//   ];

//   console.log(slides);

//   return (
//     <div className='mainContainer'>
//       <div className='productContainer'>
//         {/* <div className='imageSlider'>
//                     <ImageSlider slides={slides}/>
//                 </div> */}
//         <div className='productImage'>
//           <img src={productImages[product.id]} alt='productImage' />
//         </div>

//         <div className='productInfo'>
//           <div className='productName'>
//             <h1>{product.name}</h1>
//           </div>
//           <div className='productPrice'>
//             <h2>{product.price}</h2>
//           </div>
//           <div className='productAmount'>
//             <h3>Disponibles: {product.amount}</h3>
//           </div>
//           <div className='productButton'>
//             <div></div>
//             <input type='number' />
//             <Link to={`/login`} className='ProductLink'>
//               <button>Agregar al Carrito</button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className='productDescription'>
//         <p>{product.description}</p>
//       </div>
//     </div>
//   );
// }

// export default ProductView;
