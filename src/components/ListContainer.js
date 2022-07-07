import React from "react";
import ListItem from "./ListItem";


function ListContainer({list, handleClick, handleAddToCart}){

    const style ={
        color: 'rgb(190, 27, 60)'
    }
    
    return (
        <div>
            <h1 className="title" style={style}>Restaurants available</h1>
            <ul className="cards">
                {list ? list.map((item)=> 
                    <ListItem 
                        item={item} 
                        key={item.id} 
                        handleClick={handleClick}
                        handleAddToCart={handleAddToCart}
                    />) : []}
            </ul>
        </div>
    )
}

export default ListContainer;