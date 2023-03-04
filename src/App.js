import Button from 'react-bootstrap/Button';
import NavScrollExample from './components/navbar';
import './App.css';
import { useState } from 'react';
import Alert from './components/alert';

function App() {
  const [input,setinput] = useState("");
  const [alert,setalert] = useState(null);
  const [mode , setmode] = useState("")
const showalert =(message)=>{
    setalert({
        message:message,
    })
    setTimeout(()=>{
      setalert(null);
    },2000)
}

  //to convert uppercase
  const Uppercase =(input)=>{
    setinput(input.toUpperCase());
    // console.log(input);
    showalert("Uppercasing text successfully..!");
  }
   //to convert uppercase
  const Lowercase = (input)=>{
    setinput(input.toLowerCase());
    showalert("Lowercase text successfully..!");
  }
  //to make clear page 
  const ClearAll = (input)=>{
    input=""
    setinput(input); 
    showalert("Textarea is emty...! add new text now..!");
  }
  //to copy the text 
  const CopyText =()=>{
    var text = document.getElementById("textarea");
    text.select()
    navigator.clipboard.writeText(text.value);
    showalert("text copied successfully..!");
  }
  //to select all text 
  const SelectAll =()=>{
    var text = document.getElementById("textarea");
    text.select();
    showalert("All text is selected..!");
  }
//to handle spaces in between words
const Spacesbtn=(input)=>{
    let newtext = input.split(/[ ]+/);// "      "
    setinput(newtext.join(" "));
    showalert("Same space in between Each word..!");
}

  return <div className={`${mode}` ? "normal-mode" : ""}>
  <NavScrollExample mode={mode}/>
  {alert && input && <Alert alert={alert} />}
  <div id='container' >
     <h2>Add text here : </h2>
     <textarea id='textarea' onChange={(e)=>{
       setinput(e.target.value)
        // console.log(e.target.innerHTML);
     }}
     value={input}></textarea>
     <Button variant="primary" onClick={()=>{Uppercase(input)}}>UpperCase</Button>{' '}
     <Button variant="primary" onClick={()=>{Lowercase(input)}}>LowerCase</Button>{' '}
     <Button variant="primary" onClick={()=>{Spacesbtn(input)}} >Space Between</Button>{' '}
     <Button variant="primary" onClick={()=>{ClearAll(input)}}>ClearAll</Button>{' '}
     <Button variant="primary" onClick={()=>{SelectAll(input)}}>SelectAll</Button>{' '}
     <Button variant="primary" onClick={()=>{CopyText(input)}}>Copy</Button>{' '}
     <Button variant="primary" onClick={()=>{!mode ? setmode("normal-mode"):setmode("")}}>Change Mode</Button>{' '}
     <div>
      <h2>Your Text summary is here </h2>
     <h4> {input.split(" ").length} Words and {input.length} Characters</h4>
     <h5> {input.split(" ").length*0.08} Minutes to Read</h5>
     </div>
     <div>
     <h4>Text Preview : </h4>
      <h5>{input}</h5>
     </div>
  </div>
  </div>
}
export default App;
