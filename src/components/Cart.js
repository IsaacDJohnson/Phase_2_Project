import React from "react";

function Cart({inCart}){

    const style ={
        color: 'white'
    }

    return (
        <div className="card">
            <h1 className="title" style={style}>Items in your cart:</h1>
            <ul>{inCart}</ul>
        </div>
    )
}

export default Cart;