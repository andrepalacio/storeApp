import '../Styles/confirmacion.css';
import logo from '../Images/appImages/logo.jpeg';
import {Link} from 'react-router-dom';
function App() {
  return (
    <div className="Confirmed">
      <div className="container-logo-login">
                <img className="logo-login" alt='Imagen Logo' src={logo} />
            </div>
        <p>
          Su compra ha sido exitosa.
        </p>
        <Link to={`/`} className='HomePage'>
                <button className='HomeButton'>Regresar a la página principal</button>
         </Link>

    </div>
  );
}
export default App;
