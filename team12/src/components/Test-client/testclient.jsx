import { Link } from "react-router-dom"
import Popup from 'reactjs-popup';
import './styles.css'

export function TestClient(){

    return(
        <div className="main-test">
            <h1>Test de diagnóstico digital</h1>
            <h2>Test desplegable con respuestas si/no</h2>
            <h4> ¿Dispones de acciones para sensibilizar a tus empleados sobre cuestiones relacionadas con la seguridad en materia de tecnologías de la información y comunicación (TIC)?</h4>
                <input type="radio" value="Si" name="si" /> Si
                <input type="radio" value="No" name="no" /> No
            <h4>  ¿Dispones en tu organización de medidas de seguridad para las TIC (tecnologías de la información y la comunicación)?</h4>
            <input type="radio" value="Si" name="si" /> Si
                <input type="radio" value="No" name="no" /> No
            <h4> ¿Cuál es la velocidad de descarga máxima contratada de tu conexión a internet?</h4>
            <input type="radio" value="Si" name="si" /> Si
            <input type="radio" value="Si" name="si" /> Si
                <input type="radio" value="No" name="no" /> No
            <h4>¿Dispone tu organización de un perfil en alguna red social?</h4>
            <input type="radio" value="Si" name="si" /> Si
                <input type="radio" value="No" name="no" /> No
            <h4> ¿Utilizas las redes sociales con algún objetivo concreto (por ejemplo, para anunciar o publicitar tu negocio)?
            </h4>
                <input type="radio" value="Si" name="si" /> Si
                <input type="radio" value="No" name="no" /> No
            
            
            <Popup trigger={<button>ENVIAR</button>} position="right center">
                <div>
                    <h4>Tu perfil es</h4>
                    <p>Cero tecnológico</p>
                    <h4>Recomendación</h4>
                    <p>Implementar todos los servicios</p>
                    <button><Link to="/profile">CONTINUAR</Link></button>
                </div>
</Popup>

        </div>
    )
}