import { FaCalendarAlt } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { CgMenuRight, CgMenuRightAlt } from "react-icons/cg";
import { FaGraduationCap } from "react-icons/fa";
import '../../CSS/NavBarCSS.css';
import {useState} from "react";
import { Link } from "react-router-dom";

function NavbarComponent(){
    let [buttonState, setButtonState] = useState(null);
    const handleOnClick = () => {
        setButtonState(!buttonState);
    }
    return(
        <nav className="Navbar">
            <div className="icons logo">
                <img src={process.env.PUBLIC_URL + "./images/logo.png"} alt="Logo" />
            </div>
            <Link className="icons" to="/">
                <FaHome />
            </Link>
            <Link className="icons" to="/classes">
                <FaBookOpen />
            </Link>
            <Link className="icons" to="/">
                <MdAssignment />
            </Link>
            <Link className="icons" to="/">
                <FaCalendarAlt />
            </Link>
            <Link className="icons" to="/profile">
                <FaGraduationCap />
            </Link>
            
            <Link className="icons drop-down-button" onClick={handleOnClick}>
                
                {
                  buttonState ? 
                        <>
                            <CgMenuRightAlt />
                            <div className={`drop-down-menu ${buttonState ? 'active' : ''}`}>
                                Gamessdihfffffffffffffffffffffffffffffffffsadhoashdoiashdoahsodhasoidhaoshdoaishdoahdiashdoashdaisdooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
                                <br/>
                            </div>
                        </>
                        :
                        <CgMenuRight />
                }
                
            </Link>
           
            
        </nav>
        ) 
}
export default NavbarComponent;