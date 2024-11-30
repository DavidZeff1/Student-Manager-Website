import ButtonComponent from "../ButtonComponents/ButtonComponent";

function PersonDescryptionComponent({UserInfo}){
    return (<>
        <div className="container">
            <div className="firstName-lastName">
                <p>{UserInfo.firstName} {UserInfo.lastName}</p>
            </div>
            <div className="phoneNumber">
                <p>{UserInfo.phoneNumber}</p>
            </div>
            <div className="email">
                <p>{UserInfo.email}</p>
            </div>
            <div className="college">
                <p>{UserInfo.college}</p>
            </div>
            <ButtonComponent buttonText="Edit"/>
        </div>
    </>);
}

export default PersonDescryptionComponent;