import { FaCalendarAlt } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BsEmojiSunglassesFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import '../CSS/NavBarCSS.css';

function NavbarComponent(){
    return(
        <nav className="Navbar">
            <div className="icons logo">I-STUDENT<BsEmojiSunglassesFill/></div>
            <div className="icons"><FaHome/></div>
            <div className="icons"><FaBookOpen/></div>
            <div className="icons"><MdAssignment/></div>
            <div className="icons"><FaCalendarAlt/></div>
            <div className="icons"><FaGraduationCap/></div>
        </nav>
        ) 
}
export default NavbarComponent;