import "../../CSS/TopicCardComponentCSS.css"

function TopicCardComponent(props){
    return (
        <>
            <div className="topic-card-container">
                <div className="topic-card-options">
                    <img src={process.env.PUBLIC_URL + props.optionsSvg} alt="options" />
                </div>
                <div className="topic-card-img">
                    <img  src={process.env.PUBLIC_URL + props.topicImg} alt="topic" />
                </div>
                <div className="topic-card-title">
                    {props.topic}
                </div>
            </div>
        </>
    );
}

export default TopicCardComponent;