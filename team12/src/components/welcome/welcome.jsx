
import { Link } from "react-router-dom"
import Login from "./loginpopup/loginpopup."
import Register from "./registerpop/register"


export function Welcome(){
    return(
        <div className='main-welcome'>
            <Link to='/partner'>Área de Agente digitalizador </Link>
            <h1>Welcome to DigiMatch</h1>
            <Login />
            <Register />
        </div>
    )
}