import React, {useState} from "react";

function ListItem({item, handleClick, handleAddToCart}){

    const [isClicked, setClicked] = useState(true)
    const [isAdded, setAdded] = useState(true)
    const {name, type, price, Signiture, image} = item
    // needed emoji: 👍

    function handleLike(e){
        isClicked ? setClicked(false) : setClicked(true)
        handleClick(e)
    }

    function handleAdd(e){
        handleAddToCart(e)
        isAdded ? setAdded(false) : setAdded(true)
    }

    const cardValue = {
        name: name,
        type: type,
        price: price
    }

    return (
        <li className="card">
            <div className="details" >
                <h3>{name}</h3><br/>
                <img src={image} height="100px" alt="No Image Available"/><br/>
                <span>Food: {type}</span><br/>
                <span className="price">Price: {price}  </span><br/>
                <span>Signiture Dish: {Signiture}</span><br/>
                    {isClicked ? 
                    <button className="button" onClick={handleLike} value={name}>👍</button> : 
                    <button className="button" onClick={handleLike} >Liked!</button> 
                    }
                    {isAdded ? 
                    <button className="addButton" onClick={handleAdd} value={Signiture}>Add to Cart</button> : 
                    <button className="addButton" onClick={handleAdd}>In Cart</button>
                    }
            </div>
        </li>
    )
} 

export default ListItem;