import '../Styles/confirmacion.css';
import logo from '../Images/appImages/theLegoGarage.png';
import {Link} from 'react-router-dom';
function App() {
  return (
    <div className="Confirmed">
      <div className="container-logo-login">
                <img className="logo-login" alt='Imagen Logo' src={logo} />
            </div>
        <h3>
          ¡Su compra ha sido exitosa!
        </h3>
        <Link to={`/`} className='HomePage'>
                <button className='HomeButton'>Regresar a la página principal</button>
         </Link>

    </div>
  );
}
export default App;
