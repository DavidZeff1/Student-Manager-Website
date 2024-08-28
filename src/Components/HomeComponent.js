import NavbarComponent from "./NavbarComponent"
import NextClassCardComponent from "./NextClassCardComponent";
import ToDoCardComponent from "./ToDoCardComponent";
import InboxCardComponent from "./InboxCardComponent";
import CalendarCardComponent from "./CalendarCardComponent";
import '../CSS/HomeComponentCSS.css';

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