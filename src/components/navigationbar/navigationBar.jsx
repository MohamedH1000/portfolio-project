import pharmacyLogo from '../assets/pharmacyLogo.webp'
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

// main navbar of all the website
function NavBar () {
    return (
    <header className="App">
      <Link to="/" style={{textDecoration:'none',color: 'black', '--i':'0.4s'}}><img src= {pharmacyLogo} alt=''></img></Link>
      <nav>
        <ul>
        <Link to="/medication" style={{textDecoration:'none', color: 'var(--text-color)'}}><li style={{'--i':'0.5'}}>Medications</li></Link>
        <Link to="/hair-care" style={{textDecoration:'none',color:'var(--text-color)'}}><li style={{'--i':'0.6'}}>Hair care</li></Link>
        <Link to="/skin-care" style={{textDecoration:'none',color:'var(--text-color)'}}><li style={{'--i':'0.7'}}>Skin Care</li></Link>
        <Link to="/daily-essentials" style={{textDecoration:'none',color: 'var(--text-color)'}}><li style={{'--i':'0.8'}}>Daily Essentials</li></Link>
        <Link to="/mom-and-baby" style={{textDecoration:'none',color: 'var(--text-color)'}}><li style={{'--i':'0.9'}}>Mom and Baby</li></Link>
        <Link to="/makeup-and-accessories" style={{textDecoration:'none',color: 'var(--text-color)'}}><li style={{'--i':'1'}}>Makeup and Accessories</li></Link>
        <Link to="/health-care-devices" style={{textDecoration:'none',color: 'var(--text-color)'}}><li style={{'--i':'1.02'}}>Health Care Devices</li></Link>
        <Link to="/vitamins" style={{textDecoration:'none',color: 'var(--text-color)'}}><li style={{'--i':'1.05'}}>Vitamins and Supplements</li></Link>
        </ul>
      </nav>
      <div id='menu-icon'><FiMenu/></div>
    </header>
    );
}
export default NavBar;