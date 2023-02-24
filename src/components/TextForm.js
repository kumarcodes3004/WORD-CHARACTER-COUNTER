import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("uppercase was clicked")
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (Event)=> {
        console.log("on change");
        setText(Event.target.value);
    }
    const handleLwClick = ()=>{
        let newText1 = text.toLowerCase();
        setText(newText1);
    }
    const handleCleanClick =()=>{
        let newText= "";
        setText(newText);
    }
    const[text,setText] =useState('');
 //   text = "new text";   wrong way of updating state
    // setText("new text");   //correct way to chnage the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}></div>
    <h1>{props.heading}</h1>
  <div className="form-group">
        {/* here onchange helps us writing in the textarea else we wont be able to write  */}
    <textarea className="form-control" style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="6" ></textarea> 
    <button className="btn btn-primary my-3" onClick={handleUpClick} >Convert to UpperCase</button>
    <button className="btn btn-primary my-3 mx-3" onClick={handleLwClick} >Convert to lowerCase</button>
    <button className="btn btn-primary my-3 mx-3" onClick={handleCleanClick} >Clear Text</button>
  </div>
  <div className="container my=3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>  
    {/* text.spli("")  gives a array */}
    <p >{text.split(" ").length-1} words ,{text.length} characters</p>
    <p>{.008* text.split(" ").length-.008} mins will be reuired for reading this</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>

</>
  )
}
