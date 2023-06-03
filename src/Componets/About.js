import React, { useState } from "react";

export default function About() {

    const [myStyle , setmyStyle] = useState({
        color: 'white',
        backgroundColor : '#161515'
    })


    // For Botton Text

    const [btnText , setBtnText] = useState('Enable Dark Mode')


   const toggleStyle = () =>{
      if (myStyle.color === 'white') {
        setmyStyle({
            color: '#161515',
            backgroundColor : 'white'

        })
        setBtnText("Enable Dark Mode")
        
      }
      else {
        setmyStyle({
            color: 'white',
            backgroundColor : '#161515'

        })
        setBtnText("Enable Light Mode")
      }
   }





  return (
    <div className="container my-3" style={myStyle}>
    <h2 className="my-3">About TxtUtiles</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Accordion Item 1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse" style={myStyle}
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Basic features of a text editor include the ability to cut, paste
              and copy text, find and replace words or characters, create
              bulleted lists, line-wrap text, and undo or redo a last command.
              They're also equipped to open very large files (too big for a
              computer's main memory to process) and read them at speed.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
                <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse"   
                data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" > Accordion Item #3</button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>     
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>

      <button type="button" onClick={toggleStyle} className="btn btn-outline-info my-3">{btnText}</button>

    </div>
  );
}
