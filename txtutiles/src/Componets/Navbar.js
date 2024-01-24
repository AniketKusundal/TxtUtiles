import React from "react";
// import { Link } from "react-router-dom";

// import propTypes from 'prop-types'
// import propTypes from 'prop-types'



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>    
      <div className="container-fluid">
       
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <a className="navbar-brand" href="/#">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              <a className="nav-link active" aria-current="page" href="/#">Home</a>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link" to="/About">{props.aboutTxtUtiles}</Link>
            </li> */}
          </ul>


        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'Dark' : 'light'}`}>
        <label className="form-check-label" htmlFor="flexCheckDefault">Enable Dark Mode</label>
           <input className="form-check-input mr-4" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          </div>
      </div>
      
    </nav>
  );
}


// Navbar .propTypes ={
//     title : propTypes.string.isRequired,
//     aboutTxtUtiles : propTypes.string.isRequired
// }

// Navbar.defaultProps={
//     title :  "Set your title here",
//     aboutTxtUtiles : "set your about here"

// };