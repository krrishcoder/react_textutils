import './App.css'
// import About from './components/About';
import Navbar from './components/Navbar';
import React , {useState} from "react"
 import TextForm from './components/TextForm';
import Alert from './components/Alert';

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


  return (
    <div>

      <Navbar title="textutils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />

      <div className="container my-3"> 

        <TextForm heading="Enter the text to anaylize below" mode={mode} showAlert={showAlert}/> 

        {/* <About /> */}
      
      </div>
     

    </div>
  );
}

export default App;
