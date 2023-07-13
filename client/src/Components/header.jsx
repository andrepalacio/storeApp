import React from 'react';
import '../Styles/header.css';
import { BsPerson, BsBag, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import logo from '../Images/appImages/logo.jpeg'; // Importa la imagen
import { Link, useNavigate } from 'react-router-dom';

const Header = (props) => {

  const userVar = localStorage.getItem('username')
  const navigate = useNavigate()

    const handleClick = () => {
      localStorage.removeItem('username')
      localStorage.removeItem('accessToken')
      localStorage.removeItem('username')

      navigate('/')
    }
  

  return (
    <header className="container-header">

      <a href='/'>
        <div className="logo">
          <img src={logo} alt="Logo de la tienda" /> {/* Utiliza la imagen */}
        </div>
      </a>

      <div className="title">
        <a href='#'>THE LEGO GARAGE</a>
      </div>
      
        


      <div className="actions">
        <div className='nameMessage'>
          <h3>Bienvenido {userVar}!</h3>
        </div>

        <div className="link">
          <BsPerson size={30} />
        </div>
        <div className="link">
          <BsBag size={24} />
          <span className='item_total'>0</span>
        </div>
        <div className='link'>
          <button onClick={handleClick}><BsFillArrowLeftCircleFill size={30} /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;