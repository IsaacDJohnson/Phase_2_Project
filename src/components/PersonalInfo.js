import React from "react";

function PersonalInfo({name, number, email, handleNameChange, handleEmailChange, handleNumberChange, submit, formContainer}){

    const style ={
        color: 'rgb(190, 27, 60)'
    }

    return (
        <div>
            <h1 className="title" style={style}>Personal Profile</h1>
            <form className="title" onSubmit={submit}>
            <input type="text" value={name} onChange={handleNameChange}></input><br/>
            <input type="text" value={number} onChange={handleNumberChange}></input><br/>
            <input type="text" value={email} onChange={handleEmailChange}></input><br/>
            <button>submit</button>
            </form>
            <div>{formContainer}</div>
        </div>
    )
}

export default PersonalInfo;