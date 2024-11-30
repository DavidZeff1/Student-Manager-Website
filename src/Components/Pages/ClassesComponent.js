import NavbarComponent from "./NavbarComponent"
import TopicCardComponent from "../ClassesPageComponents/TopicCardComponent";
import '../../CSS/ClassesComponentCSS.css';

function ClassesComponent(){
    return (
            <>
                <NavbarComponent/>
                <div className="class-container">
                    <h3>My Classes</h3>
                    <div className="class-container-topics">
                        <TopicCardComponent
                            optionsSvg = "/svg/options.svg"
                            topicImg = "/images/books.png" 
                            topic = "Philosophy"
                        />
                        <TopicCardComponent
                            optionsSvg = "/svg/options.svg"
                            topicImg = "/images/books.png" 
                            topic = "Philosophy"
                        />
                        <TopicCardComponent
                            optionsSvg = "/svg/options.svg"
                            topicImg = "/images/books.png" 
                            topic = "Philosophy"
                        />
                        <TopicCardComponent
                            optionsSvg = "/svg/options.svg"
                            topicImg = "/images/books.png" 
                            topic = "Philosophy"
                        />
                        <TopicCardComponent
                            optionsSvg = "/svg/options.svg"
                            topicImg = "/images/books.png" 
                            topic = "Philosophy"
                        /><TopicCardComponent
                        optionsSvg = "/svg/options.svg"
                        topicImg = "/images/books.png" 
                        topic = "Philosophy"
                    /><TopicCardComponent
                    optionsSvg = "/svg/options.svg"
                    topicImg = "/images/books.png" 
                    topic = "Philosophy"
                /><TopicCardComponent
                optionsSvg = "/svg/options.svg"
                topicImg = "/images/books.png" 
                topic = "Philosophy"
            /><TopicCardComponent
            optionsSvg = "/svg/options.svg"
            topicImg = "/images/books.png" 
            topic = "Philosophy"
        /><TopicCardComponent
        optionsSvg = "/svg/options.svg"
        topicImg = "/images/books.png" 
        topic = "Philosophy"
    /><TopicCardComponent
    optionsSvg = "/svg/options.svg"
    topicImg = "/images/books.png" 
    topic = "Philosophy"
/>
                    </div>
                </div>
            </>
            )
}
export default  ClassesComponent;