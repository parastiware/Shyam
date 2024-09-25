 import '../styles/Navbar.css'
 function Navbar()
{
    return(<>
    <div className="navbar">
        <div className="navitems">
        <div className="navitem logo" >
                Logo
            </div>
            <div className="navitem name">
                SHYAM
            </div>
        </div>
        <ul className="navitems">
            
            
         
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