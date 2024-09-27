 import '../styles/Navbar.css'
 import ShyamLogo from '../assets/shyam-logo.svg'
 function Navbar()
{
    return(<>
    <div className="navbar">
        <div className="navitems left">
        <div className="navitem logo" >
                <img src={ShyamLogo} alt="Shyam Logo"/>
            </div>
            <div className="navitem name">
                SHYAM
            </div>
        </div>
        <ul className="navitems right">
         
            <li className="navitem">
                Work
            </li>
            <li className="navitem">
                About
            </li>
            <li className="navitem">
                Blog
            </li>
            <li className="navitem">
                Books
            </li>
        </ul>

    </div>
    </>);

}
export default Navbar;