import React from 'react';
import '../Styles/header.css';
import { BsPerson, BsBag, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import theLegoGarage from '../Images/appImages/theLegoGarage.png'; // Importa la imagen

const Header = (props) => {
  return (
    <header className="container-header">

      <div className="claseDeEnvio">
        <h2 className='textHeader'>Envio gratis por compras superiores a $400.000</h2>
      </div>

      <div className="containerMenu">
        <a href='/'>
          <div className="logo">
            <img src={theLegoGarage} alt="Logo de la tienda" /> {/* Utiliza la imagen */}
          </div>
        </a>

        <div className="title">
          <a href='#'>THE LEGO GARAGE</a>
        </div>


        <div className="actions">
          <div className='nameMessage'>
            <h3>Bienvenido {props.idUser}!</h3>
          </div>

          <div className="link">
            <BsPerson size={30} />
          </div>
          <div className="link">
            <BsBag size={24} />
            <span className='item_total'>0</span>
          </div>
          <div className='link'>
            <BsFillArrowLeftCircleFill size={30} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;