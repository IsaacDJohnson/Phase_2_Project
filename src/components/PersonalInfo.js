import React from "react";

function PersonalInfo(){
    return (
        <div>
            <h1 className="title">Personal Profile</h1>
            <form className="title">
            <input type="text" defaultValue="name..."></input><br/>
            <input type="text" defaultValue="phone number..."></input><br/>
            <input type="text" defaultValue="address..."></input><br/>
            </form>
        </div>
    )
}

export default PersonalInfo;