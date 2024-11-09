import React, {useState} from "react";
import {Link} from 'react-router-dom'

export default function Navbar(props){


  const [selectedRadio, setSelectedRadio] = useState("light_mode");

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
    console.log("Selected Radio:", event.target.id);
    props.setMode(event.target.id);
    props.colorMode()
    
  };


    return(
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"> {props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
            </ul>
           

            {/* <div className={`form-check form-switch text-${ props.mode === 'light'? 'dark': 'light' }`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{ props.mode === 'light'? 'dark': 'light' } mode</label>
          </div> */}


          <div className={`form-check mx-3 text-dark`}>

            <input className="form-check-input"  checked={selectedRadio === "red_mode"}
              onChange={ handleRadioChange} type="radio"  name="flexRadioDefault" id='red_mode' />
            <label className="form-check-label" htmlFor='red_mode'>Red Mode </label>

          </div>

          <div className={`form-check mx-3  text-dark`}>
            <input className="form-check-input"  type="radio"    checked={selectedRadio === "green_mode"} 
            onChange={handleRadioChange} name="flexRadioDefault" id='green_mode'/>
            <label className="form-check-label" htmlFor="green_mode">Green Mode </label>
          </div>

          <div className={`form-check mx-3  text-dark`}>
            <input className="form-check-input"  type="radio" name="flexRadioDefault"   checked={selectedRadio === "light_mode"} 
          onChange={handleRadioChange}  id="light_mode"/>
            <label className="form-check-label" htmlFor="light_mode" >Light Mode </label>
          </div>

          <div className={`form-check mx-3  text-dark`}>
            <input className="form-check-input"  type="radio" name="flexRadioDefault" checked={selectedRadio === "dark_mode"} 
            onChange={handleRadioChange} id="dark_mode"/>
            <label className="form-check-label" htmlFor="dark_mode" >Dark Mode </label>
          </div>

          </div>
        </div>
      </nav>
    )
}

Navbar.defaultProps = {
    title:"Set title here",
    aboutText:"About text here"
}



