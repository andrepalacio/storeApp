import '../Styles/rechazado.css';
import logo from '../Images/appImages/theLegoGarage.png';
import {Link} from 'react-router-dom';
function App() {
  return (
    <div className="cancel">
      <div className="container-log">
                <img className="logo-login" alt='Imagen Logo' src={logo} />
                </div>
        <h3>
        Su compra no se ha podido realizar satisfactoriamente
        </h3>
       
        <Link to={`/`} className='HomePage'>
                <button className='Button'>Volver a comprar</button>
         </Link>

    </div>
  );
}

export default App;
