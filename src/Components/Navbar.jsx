import './style.css'
import { Link } from 'react-router-dom';

function Navbar(){
    return (

        <div className="nav">
            <Link to="./">
                <h1 className='h1'>Kalvium❤️</h1>
            </Link>

            <div className='flex'>
                <Link to="./About">
                    <h4 className='h1'>About</h4>
                </Link>
                <Link to="./Contact">
                    <h4 className='h1'>Contact</h4>
                </Link>
            </div>
        </div>

    )
}

export default Navbar;