import React from "react";

function Saved({liked}){

    const style ={
        color: 'white'
    }

    return (
        <div className="card">
            <h1 className="title" style={style}>Your Liked Locations:</h1>
            <ul>{liked}</ul>
        </div>
    )
}

export default Saved;