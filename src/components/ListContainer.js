import React from "react";
import ListItem from "./ListItem";


function ListContainer({list, handleClick}){
    return (
        <div>
            <h1 className="title">Restaurants near you</h1>
            <ul className="cards">
                {list ? list.map((item)=> <ListItem item={item} key={item.id} handleClick={handleClick}/>) : []}
            </ul>
        </div>
    )
}

export default ListContainer;