import React, {useEffect, useState} from 'react';
import Stock from './stock';
import AdministratorForm from './administratorForm';
import Header from './header';
import '../Styles/administrator.css';

function Administrator() {
  const [admin, setAdmin] = useState(null);
  const [displayComponent, setDisplayComponent] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:9000/administrator/${localStorage.getItem('id')}}`);
      const data = await response.json();
      setAdmin(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClick = (componentName) => {
    fetchData();
    if (componentName === 'administratorForm') {
      setDisplayComponent(<AdministratorForm admin={admin.admin}/>);
    } else if (componentName === 'stock') {
      setDisplayComponent(<Stock productsArray={admin.products}/>);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(admin);

  return (
    <>
      <Header />
      {admin && (
        <div className='adminData'>
          <h2>Bienvenido {admin.admin[0].name}</h2>
          <p className='parrContent'>Desde aquí puedes editar tus datos y el stock de productos</p>
          <button className="btnForm" onClick={() => handleButtonClick('administratorForm')}>Editar Información Administrador</button>
          <button className="btnInventario" onClick={() => handleButtonClick('stock')}>Editar Inventario</button>
          {displayComponent}

        </div>
      )}
    </>
  )
}

export default Administrator;