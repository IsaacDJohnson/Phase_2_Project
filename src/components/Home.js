import React from "react";
import ListContainer from "./ListContainer";

function Home({list, handleClick}){
    return (
        <div>
            <ListContainer list={list} handleClick={handleClick}/>
        </div>
    )
}

export default Home;