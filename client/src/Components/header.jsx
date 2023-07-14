import React from 'react';
import { useState } from 'react'
import '../Styles/header.css';
import { BsPerson, BsBag, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link, useNavigate, } from 'react-router-dom';
import theLegoGarage from '../Images/appImages/theLegoGarage.png'; // Importa la imagen

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
    window.location.reload()
  };


  const handleClickLogin = () => {
    if (!accessToken){
      navigate('/login')
    }
  };

  const handleClickCart = () => {
    if (accessToken){
      navigate('/cart')
    }
  }

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

        <div className="actions">
          <div className='nameMessage'>
            <h3>Bienvenido {userVar} {userId}!</h3>
          </div>

          <div className="link">
            <button onClick={handleClickLogin}>
              <BsPerson size={30} />
            </button>
          </div>
          <div className="link">
            <button onClick={handleClickCart}><BsBag size={24} />
              <span className='item_total'>0</span>
            </button>
          </div>
          <div className='link'>
            <button onClick={handleClickLogout}><BsFillArrowLeftCircleFill size={30} /></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
