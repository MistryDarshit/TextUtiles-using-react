import React ,{ useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {BrowserRouter,Route,Routes} from "react-router-dom"


function App() {
  const [mode,setMode] = useState('light') //Whether Dark Mode is Enable or Not
  const[alert,setAlert]= useState(null)

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type,
    })
  }
  const toggaleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setAlert("dark Mode Has Been Enabled")
      document.title = 'TextUtiles-Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setAlert("Light Mode Has Been Enabled")
      document.title = 'TextUtiles-light Mode'; 
    }
  }

  return (
    <>
       <div className="container my-3">
   <Navbar title="Utiles" About="AboutUS" version="1.2.0" mode ={mode} toggaleMode={toggaleMode}/>
   <Alert alert=  {alert}/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}/>}/> 
      <Route path="/about" element={<About/>}/> 
    </Routes>
    </BrowserRouter>
       </div> 
   </>
  );
}

export default App;
