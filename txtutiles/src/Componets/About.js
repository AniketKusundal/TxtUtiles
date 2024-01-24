import React, { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: "white",
    backgroundColor: "#161515",
  });

  // For Botton Text

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setmyStyle({
        color: "#161515",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    } else {
      setmyStyle({
        color: "white",
        backgroundColor: "#161515",
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h2 className="my-3">About TxtUtiles</h2>
      <div
        className="accordion accordion-flush"
        id="accordionFlushExample"
        style={myStyle}
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            style={myStyle}
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
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Free To Use
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              free is a good way to increase your user base and give your
              business greater resilience. And with major mobile brands like
              Headspace, HBO Max, and UberEats offering their services for free,
              you might be curious if you should follow suit.* But switching up
              your monetization model is no small task. How do you know if this
              is the right play for your brand? How will choosing a freemium
              model
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
             
             stro Browser Compatible
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
            Browser compatibility is the capability or flexibility of a website, web application, script or HTML design to function on different web browsers available in the market. The benefit of creating a website with browser computability is that it improves a website's reach and cuts down on loss in performance
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={toggleStyle}
        className="btn btn-outline-info my-3"
      >
        {btnText}
      </button>
    </div>
  );
}
