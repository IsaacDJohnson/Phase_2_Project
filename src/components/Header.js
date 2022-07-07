import React from "react";

function Header({name}){
    return (
        <div className="header">
            <h1>Welcome {name} to FlyingEats</h1>
            <h3 className='subText'>drone delivered food in under 29 minutes</h3>
        </div>
    )
}

export default Header;