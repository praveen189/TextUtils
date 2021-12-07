import React, {useState} from 'react'

export default function TextForm(props) {
   //text = "new text"; // wrong way to change state.
   //setText ("New text");

   const handleUpClick = () => {
     //console.log("upper case was clicked" + text);
     let newText = text.toUpperCase();
     setText(newText);
   };
   const handleLoClick = () => {
     //console.log("upper case was clicked" + text);
     let newText = text.toLowerCase();
     setText(newText);
   };
   const handleClearClick = () => {
     //console.log("upper case was clicked" + text);
     let newText = "";
     setText(newText);
   };

   //    const handleUpClick = () =>{
   //     //console.log("upper case was clicked" + text);
   //     let newText = text.toUpperCase();
   //     setText(newText);

   const handelOnChange = (event) => {
     //console.log("onChange");
     setText(event.target.value);
   };

   const handleCopy = () =>{
     console.log("i am copy");
     let text = document.getElementById("myBox");
     text.select(); // complete text will be selected.
     navigator.clipboard.writeText(text.value); // and using navigator used to copy complete text value.
   };

   const handleEctraSpaces = () => {
     let newText = text.split(/[ ]+/); // use if regx
     setText(newText.join(" "))
   }
// this is for the text area to type the text once onclicekd is used.

   const [text, setText] = useState("");
   // text is a value 
   // setText is a function 

    return (
        <>
        <div className = "container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange = {handelOnChange} id="myBox" rows="10"></textarea>
            </div>
           <button className= "btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upppercase</button>
           <button className= "btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
           <button className= "btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
           <button className= "btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
           <button className= "btn btn-primary mx-2" onClick={handleEctraSpaces}>Remove Extra Speces</button>
        </div>

        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length -1} Words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read </p>
            <p>{0.08 * text.split(" ").length} Minutes to speak </p>

            <h1>Preview</h1>
            <p>{text}</p>
        </div>
        </>
    )
}

// onlick function call hoga
//text.split(" ") this will give me a Array.and text.split(" ").length will give the size of Array.