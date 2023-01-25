import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    console.log("on Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
  //test="new TExt" wrong way to change the state
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="my-3">
  <label className="form-label">{props.heading}</label>
        <textarea className="form-control my-2" onChange={handleOnChange}value={text} id="mybox"
          row="15"></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleUpClick}> UpperCaseConverter</button>



    </div>
  )
}
