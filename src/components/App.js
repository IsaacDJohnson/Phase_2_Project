import React, {useEffect, useState} from "react";
import Home from "./Home";
import NavBar from "./NavBar"
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import Cart from "./Cart";
import Saved from "./Saved";
import { Route, Switch } from "react-router-dom"


function App() {

//like page state in Saved.js
  const [list, setList] = useState([])
  const [liked, setLiked] = useState([])

//form page state in PersonalInfo.js
  const [formName, setFormName] = useState('name...')
  const [formNumber, setFormNumber] = useState('number...')
  const [formEmail, setFormEmail] = useState('email...')
  const [formContainer, setFormContainer] = useState([])

//Cart state in Cart.js
  const [inCart, setCart] = useState([])

//User State in Header.js
  const [loggedIn, setLoggedIn] = useState("")

//react method for side effect call each render
  useEffect(()=>{
//fetching data from db.json
    fetch("http://localhost:3001/restaurants")
    .then(res => res.json())
    .then(data => setList(data))
  }, [])

//like page: adds liked target to saved component as a list item
  const handleClick = (e) => {
    setLiked([...liked, <li key={e.target.value}>{e.target.value}</li>] );
  }

//Form page: adds input field submission to PersonalInfo component
  const handleNameChange = (e) => {
    setFormName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setFormEmail(e.target.value)
  }
  const handleNumberChange = (e) => {
    setFormNumber(e.target.value)
  }

//Cart: adds target element to Cart component as a list item
  const handleAddToCart = (e) => {
    setCart([...inCart, <li key={e.target.value}>{e.target.value}</li>])
  }
//submit user input values from input form
  const handleSubmit = (e) => {
    e.preventDefault()
    const array = [...formContainer, 
    
    <ul className="card">
      <h1>Welcome {formName}</h1>
        <h3>info:</h3>
          <li key={formName} >{formName}</li>
          <li key={formNumber} >{formNumber}</li>
          <li key={formEmail} >{formEmail}</li>
    </ul>]

    setFormContainer(array)
    setLoggedIn(formName)
  }

  return (
    <div className="App">
      <Header name={loggedIn}/>
      <NavBar />
      <Switch>
        <Route exact path="/personalinfo">
          <PersonalInfo 
            submit={handleSubmit} 
            formContainer={formContainer} 
            name={formName} 
            number={formNumber} 
            email={formEmail} 
            handleNumberChange={handleNumberChange} 
            handleEmailChange={handleEmailChange} 
            handleNameChange={handleNameChange}
        /></Route>
        <Route exact path="/saved"><Saved liked={liked}/></Route>
        <Route exact path="/Cart"><Cart inCart={inCart}/></Route>
        <Route exact path="/">
          <Home 
            list={list} 
            handleClick={handleClick}
            handleAddToCart={handleAddToCart}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
