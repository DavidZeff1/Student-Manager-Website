import { FaCalendarAlt } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import '../../CSS/NavBarCSS.css';
import { Link } from "react-router-dom";

function NavbarComponent(){
    return(
        <nav className="Navbar">
            <div className="icons logo">
                <img src={process.env.PUBLIC_URL + "./images/logo.png"} alt="Logo" />
            </div>
            <Link className="icons" to="/">
                <FaHome color="#7B85F9"/>
            </Link>
            <Link className="icons" to="/classes">
                <FaBookOpen color="#7B85F9"/>
            </Link>
            <Link className="icons" to="/">
                <MdAssignment color="#7B85F9"/>
            </Link>
            <Link className="icons" to="/">
                <FaCalendarAlt color="#7B85F9"/>
            </Link>
            <Link className="icons" to="/profile">
                <FaGraduationCap color="#7B85F9"/>
            </Link>
        </nav>
        ) 
}
export default NavbarComponent;