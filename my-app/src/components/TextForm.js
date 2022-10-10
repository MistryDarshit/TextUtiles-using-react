import React, {useState} from "react";
// import PropTypes from "prop-types";

export default function TextForm(props) {
  const handalUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handallowClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const clear = () =>{
    let newText = "";
    setText(newText)
  }
  const handalonchange =
  (event) =>{ 
    setText(event.target.value)
  }
   const [text, setText] = useState("Enter text Here");
  // setText()
  return (
    <> 
    <div className="container"  >
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
      <h1>{props.hading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="mybox" style={{backgroundColor: props.mode ==='dark' ? '#042743': 'white',  color:props.mode=== 'dark'?'white': 'black'}} onChange={handalonchange} value={text} rows="8"></textarea>
      </div>
      <button className="btn btn-primary " onClick={handalUpClick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handallowClick}>Convert To lowwercase</button>
      <button className="btn btn-primary mx-2" onClick={clear}>clear All</button>

    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text summary</h2>
      <p>{text.split(" ").length} word and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minuts To Read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </div>
    </>
  );
}
