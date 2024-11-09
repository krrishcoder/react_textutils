import './App.css'
import About from './components/About';
import Navbar from './components/Navbar';
import React , {useState} from "react"
 import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const [mode, setMode] =  useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message, type)=>{

    setAlert({
      msg:message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  const toggleMode = ()=>{

        if(mode === 'light'){
            setMode('dark')
            document.body.style.backgroundColor = '#151B54'
            showAlert("Dark mode has been enabled", "success")  //success
        }else{
          setMode('light')
          document.body.style.backgroundColor = 'white'
          showAlert("Light mode has been enabled", "success")
        }

  }



  const setColorMode = ()=>{

    if(mode==='light_mode'){

      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")

    }else if(mode ==="dark_mode"){

      document.body.style.backgroundColor = '#151B54'
      showAlert("Dark mode has been enabled", "success")  //success
    }else if(mode==="green_mode"){
 
      document.body.style.backgroundColor = '#526E48'
      showAlert("Green mode has been enabled", "success")  //success


    }else if(mode === "red_mode"){

 
      document.body.style.backgroundColor = '#3D0301'
      showAlert("Red mode has been enabled", "success")  //success

    }

  }
  // <div className="container my-3"> 


  return (
    
      <Router>

      <Navbar title="textutils" aboutText="About us" mode={mode} toggleMode={toggleMode} colorMode={setColorMode} setMode={setMode}  />
      <Alert alert={alert} />

      <Routes>
            <Route  exact path="/" element={
                    <TextForm heading="Enter the text to anaylize below" mode={mode} showAlert={showAlert}/> 
                } />  
                
            <Route exact path="/about"  element={<About/>} />
    
      </Routes>
     
      </Router>
    
  );
}

export default App;
