import React from 'react';
import { useState } from 'react'
import '../Styles/header.css';
import { BsPerson, BsBag, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import logo from '../Images/appImages/logo.jpeg'; // Importa la imagen
import { Link, useNavigate, } from 'react-router-dom';

const Header = (props) => {

  const accessToken = localStorage.getItem('accessToken')
  const userVar = localStorage.getItem('username')
  const userId = localStorage.getItem('id')
  const navigate = useNavigate()

    const handleClickLogout = () => {
      localStorage.removeItem('username')
      localStorage.removeItem('accessToken')
      localStorage.removeItem('id')

      navigate('/')
    } 
  
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    // Función para cambiar el estado de isButtonDisabled
    const toggleButton = () => {
      setIsButtonDisabled(!isButtonDisabled);
    };

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
          <h3>Bienvenido {userVar} {userId}!</h3>
        </div>

        <div className="link">
          <button disabled={isButtonDisabled} onClick={toggleButton}>
            <BsPerson size={30} />
          </button>
        </div>
        <div className="link">
          <button><BsBag size={24} />
            <span className='item_total'>0</span>
          </button>
        </div>
        <div className='link'>
          <button onClick={handleClickLogout}><BsFillArrowLeftCircleFill size={30} /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;