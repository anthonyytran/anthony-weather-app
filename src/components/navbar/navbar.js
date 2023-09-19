import './navbar.css';
import AnthonyLogo from '../../images/Anthony-logos_transparent.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    <Link className='logo' to='/'>
        <img src={AnthonyLogo} alt="Logo" />
    </Link>
}

export default Navbar