
import { Link } from "react-router-dom"
import LoginPartner from "./loginpartner/loginpartner"
import RegisterPartner from "./registerpartner/registerpartner"

export function WelcomePartner(){
    return(
        <div className='main-welcome'>
            <Link to='/'>Quiero contratar un Agente </Link>
            <h1>Welcome Agente Digitalizador</h1>
            <LoginPartner />
            <RegisterPartner />            
        </div>
    )
}