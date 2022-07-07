import React from "react";
import { NavLink } from "react-router-dom";


function NavBar(){

    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        // background: "blue",
        textDecoration: "none",
        color: "white",
      };

    return (
        <div className="navBar">
            <NavLink to="/" exact style={linkStyles}>Home</NavLink>
            <NavLink to="/personalinfo" exact style={linkStyles}>Profile</NavLink>
            <NavLink to="/saved" exact style={linkStyles}>Liked</NavLink>
            <NavLink to="/cart" exact style={linkStyles}>Cart</NavLink>
        </div>
    )
}

export default NavBar;