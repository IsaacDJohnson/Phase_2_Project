import React, {useState} from "react";

function ListItem({item, handleClick}){

    const [isClicked, setClicked] = useState(true)
    const [isAdded, setAdded] = useState(true)
    const {name, type, price} = item

    function handleLike(e){
        handleClick(e)
        isClicked ? setClicked(false) : setClicked(true)
    }

    function handleAdd(){
        isAdded ? setAdded(false) : setAdded(true)
    }

    // needed emoji: 👍

    return (
        <li className="card">
            <div className="details" >
                <strong>{name}</strong><br/>
                <span>Food: {type}</span><br/>
                <span className="price">Avg price: {price}  </span><br/>
                    {isClicked ? 
                    <button className="button" onClick={handleLike} value={name}>👍</button> : 
                    <button className="button" onClick={handleLike} value={name}>Liked!</button> 
                    }
                    {isAdded ? 
                    <button className="addButton" onClick={handleAdd}>Add to Cart</button> : 
                    <button className="addButton" onClick={handleAdd}>In Cart</button>
                    }
            </div>
        </li>
    )
} 

export default ListItem;