import React from "react";
import ListContainer from "./ListContainer";

function Home({list, handleClick, handleAddToCart}){
    return (
        <div>
            <ListContainer list={list} handleClick={handleClick} handleAddToCart={handleAddToCart}/>
        </div>
    )
}

export default Home;