import './styles.css'
import { Link } from "react-router-dom"
import LoginPartner from "./loginpartner/loginpartner"
import RegisterPartner from "./registerpartner/registerpartner"

export function WelcomePartner(){
    return(
        <div className='main-welcome'>
            <Link to='/'>Quiero contratar un Partner </Link>
            <h1>Únete a DigiLover!</h1>
            <h4>Haz match con las agencias que se ajustan a tus necesidades digitales.
</h4>
            <LoginPartner />
            <RegisterPartner />            
        </div>
    )
}