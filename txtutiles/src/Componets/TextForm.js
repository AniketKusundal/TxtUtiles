import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  



  const Handelupclick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Your Text Converted To Upper Case", "Success");
  };



  const Handelloclick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Your Text Converted To Lower Case", "Success");
  };
 


  const Handelspaclick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces From Your Text", "Success");
  };
 


  const Handelclrclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Your Text Clear Successfully", "Success");
  };
  

  

  const Handelcpclick =() =>{
   var text = document.getElementById("my-box")
   navigator.clipboard.writeText(text.value)
   props.showAlert("Your Text Copied Successfully", "Success");
  }


  const HandelonChanage = (event) => {
    setText(event.target.value);
  };



  


  return (
    <>
      <div className="container" style={{color :props.mode==='dark'?'white' : 'black'}}>
        <h1>{props.heading}</h1>

        <div className="mb-3 my-4">
          <textarea className="form-control" value={text} onChange={HandelonChanage} style={{backgroundColor :props.mode==='dark'?'#161515' : 'white' , color :props.mode==='dark'?'white' : 'black'}} id="my-box" rows="10"></textarea>
        </div>

        <button type="button" disabled={text.length===0} className="btn btn-outline-primary my-3 mx-2" onClick={Handelupclick}>Convert To UpperCase</button>
        <button type="button"  disabled={text.length===0} className="btn btn-outline-info my-3 mx-2" onClick={Handelloclick}>Convert To Lower Case</button>
        <button type="button"  disabled={text.length===0} className="btn btn-outline-secondary my-3 mx-2" onClick={Handelspaclick}>Remove Extra Spaces</button>
        <button type="button"  disabled={text.length===0} className="btn btn-outline-danger my-3 mx-2" onClick={Handelclrclick}>Clear Text</button>
        <button type="button"  disabled={text.length===0} className="btn btn-outline-warning my-3 mx-2" onClick={Handelcpclick}>Copy Text</button>
        
      </div>

      <div className="container my-4" style={{color :props.mode ==='dark'?'white' : 'black'}}>
        <h1>Your Text Summary</h1>

        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words {text.length} Characters</p>

        <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes  Read Your Text</p>
        <h1>Preview Your Text Here</h1>
        <p>{text.length>0?text : "Noting To Preview !"}</p>
      </div>
    </>
  );
}
