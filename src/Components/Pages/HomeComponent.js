
import NavbarComponent from "./NavbarComponent"
import NextClassCardComponent from "../HomePageComponents/NextClassCardComponent";
import ToDoCardComponent from "../HomePageComponents/ToDoCardComponent";
import InboxCardComponent from "../HomePageComponents/InboxCardComponent";
import CalendarCardComponent from "../HomePageComponents/CalendarCardComponent";
import '../../CSS/HomeComponentCSS.css';

function HomeComponent(){

    return(
    <>
        <NavbarComponent/>
        <div className="home-container">
            <NextClassCardComponent/>
            <ToDoCardComponent/>
            <InboxCardComponent/>
            <CalendarCardComponent/>
        </div>
    </>
    )
         
}
export default HomeComponent;