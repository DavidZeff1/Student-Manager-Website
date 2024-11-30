import '../../CSS/ButtonComponentCSS.css';

function ButtonComponent({ buttonText }) {
    return(
        <button className="next-class-card-body-button">
            {buttonText}
        </button>
    );
}

export default ButtonComponent;
