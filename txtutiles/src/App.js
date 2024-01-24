import { useState } from "react";
import "./App.css";
// import About from "./Componets/About";
import Navbar from "./Componets/Navbar";
import Alert from "./Componets/Alert";
import TextFrom from "./Componets/TextForm";
// import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";




function App() {

  const [mode, setMode] = useState ('light') // This is state variable it defines Whther dark mode is on or off
  const [alert , setAlert] = useState (null);


  const showAlert = (message , type)=>{

    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2500);
     
  }





   const togglemode =() =>{
       if (mode === 'light') {
        setMode ('dark')
        document.body.style.backgroundColor ='#161515'
        showAlert("Dark Mode Is Enabled", "Success");
        
       }
       else{
        setMode ('light')
        document.body.style.backgroundColor ='white'
        showAlert("Light Mode Is Enabled", "Success");
       }
  }

  return (  
    // <Router>
  
    <> 
    <Navbar title="TxtUtiles" aboutTxtUtiles="About TxtUtiles" mode={mode} togglemode={togglemode}/> 
    <Alert alert = {alert }/>


  <div className="container my-3">
     {/* <Routes>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/" element={<TextFrom  showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/>}></Route>
      </Routes> */}
      <TextFrom  showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/>
    </div>    
    </>
  )
}
     /* </Router>  */
  



export default App;
