import './styles.css'
import { Link } from "react-router-dom"
export const Header = () =>{

    return(

        <nav className='main-menu'>
            <span><Link to='/'>Inicio</Link></span>
            <span><Link to='/about'>Sobre nosotros</Link></span>
        
        </nav>
      
    )
}