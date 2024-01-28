 import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","sucess")
    }
    const handleLowClick = ()=>{
        // console.log("Uppercase was Clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","sucess")

    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was Clicked" + text)
        let newText = "";
        setText(newText)
        props.showAlert("Text has been clear","sucess")

    }
    const handleOnchange = (event)=>{
        // console.log("ON Change")
        setText(event.target.value)
        props.showAlert("Converted to Lowercase","sucess")

    }
    const handleCopyClick = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard","sucess")

    }
    const handleExtraSpacesClick = ()=>{
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed","sucess")

    }


  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value ={text} onChange={handleOnchange} style={{backgroundColor:props.mode ==='light'?'white':'grey', color:props.mode==='dark'?'white':'black'}}  
            id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase </button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>Clear</button> 
        <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleCopyClick}>Copy</button> 
        <button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleExtraSpacesClick}>Extra Spaces</button>        
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summery</h1>
        <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} charactors</p>
        <p>{0.008 *text.split(' ').filter((element)=>{return element.length !==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Your Text to preview it here"}</p>
    </div>
    </>
  )
}
