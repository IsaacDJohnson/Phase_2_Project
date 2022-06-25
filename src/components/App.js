import React, {useEffect, useState} from "react";
import Home from "./Home";
import NavBar from "./NavBar"
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import Cart from "./Cart";
import Saved from "./Saved";
import { Route, Switch } from "react-router-dom"


function App() {

  const [list, setList] = useState([])

  const [liked, setLiked] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/restaurants")
    .then(res => res.json())
    .then(data => setList(data))
  }, [])

  function handleClick(e){

    const newArray = [...liked, <li key={e.target.value} className='card'>{e.target.value}</li>]
    console.log(newArray)
    setLiked(newArray)
  }

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/personalinfo"><PersonalInfo /></Route>
        <Route exact path="/saved"><Saved liked={liked}/></Route>
        <Route exact path="/Cart"><Cart /></Route>
        <Route exact path="/"><Home list={list} handleClick={handleClick}/></Route>
      </Switch>
    </div>
  );
}

export default App;
