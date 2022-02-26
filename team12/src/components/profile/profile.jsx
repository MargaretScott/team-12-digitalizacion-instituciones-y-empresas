import './styles.css'
import { Link } from 'react-router-dom'

export function Profile(){
    return(
        <div className='main-profile'>
            <button><Link to='/testclient'>Actualizar test de necesidades</Link></button>
            <h1>Borja Muñoz</h1>
            
        </div>
        
    )
}