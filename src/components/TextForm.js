import React, {useState} from 'react'


export default function TextForm(props) {

  const [text , setText] = useState("Enter text here");

  const handleUpClick = () => {
      console.log("uppercase was clicked")
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase", "success")
  };

  const handleLowClick = () => {
    console.log("lowercase was clicked")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase", "success")
   
  };

  const handleOnChange = (event) => {
    console.log("on change")
    setText(event.target.value);
  
  };

  const handleClearClick = (e)=>{
    setText("")
  }

  const handleFupperClick = (e)=>{

    const arr = text.split(" ")

    let str = ""

    arr.forEach((el,i)=>{
      str = str + el.substring(0,1).toUpperCase() + el.substring(1, el.length)+ " ";
    })

  setText(str)
  
  }


  return (
    <div>

<div className="container" style={{color : props.mode === 'dark'? 'grey': 'white'}} >
      <h1 style={  {color:props.mode ==='dark'?'white':'black'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'dark'? 'grey': 'white',
                  color:props.mode ==='dark'?'white':'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>

            <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to upper case</button>
            <button className='btn btn-primary mx-2' onClick={handleLowClick} >Convert to lower case</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-2 m-2' onClick={handleFupperClick}>Upper every first letter of word</button>
</div>

<div className="container my-3" style={{color : props.mode === 'dark'? 'white': 'black'}}>
<h1>Your text summary</h1>
<p>{text.split(" ").length} words , {text.length} characters </p>
<p>{ 0.008 * text.split(" ").length } Minutes read</p>

<h3>Preview</h3>
<p>{text.length >0 ? text : "Enter something in the textbox above to get Preview" }</p>


</div>

    </div>
  )
}
