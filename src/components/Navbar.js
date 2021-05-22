import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="brand">
                <div className="site-name"><h1>CryptoDashboard</h1></div>
            </div>
            <div className="links">
                <Link expect to="/">Home</Link>
                <Link expect to="/coins">Coin Overview</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;