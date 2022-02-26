import './styles.css'
import { Link } from "react-router-dom"
import Login from "./loginpopup/loginpopup."
import Register from "./registerpop/register"


export function Welcome(){
    return(
        <div className='main-welcome'>
            <Link to='/partner'>Área de Agente digitalizador </Link>
            <h1>Únete a DigiLover!</h1>
            <h4>Haz match con las agencias que se ajustan a tus necesidades digitales.
</h4>
            <Login />
            <Register />
        </div>
    )
}