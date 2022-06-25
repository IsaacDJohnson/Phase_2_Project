import React from "react";

function Saved({liked}){
    return (
        <div>
            <h1 className="title">Your Liked Locations</h1>
            <ul>{liked}</ul>
        </div>
    )
}

export default Saved;