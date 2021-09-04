// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import useStats from './components/useStats';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App(){

  //whether dark mode is enabed or not
  const [mode, setmode] = useState('light');

  const [alert, setAlert] = useState(false);

  const showAlert = (message , type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toogleMode = ()=>{
    if(mode ==='light'){
      setmode('dark')
      document.body.style.backgroundColor = '#191a4f';
      showAlert("Dark Mode Has Been Enabled" , "success")
      document.title = 'MyApp : DarkMode'
      // setInterval(() => {
      //   document.title = 'MyApp is Amazing Mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install MyApp Now'
      // }, 1500);
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode Disabled" , "success")
      document.title = 'MyApp : LightMode'
    }
  }

  return(
    <>
    <Router>

  {/* You can change title of navbar page by page */}
  {/* <Navbar/ >  */}
  <Navbar title = "GoGetter"  about = "About us"  mode = {mode} toogleMode = {toogleMode}/ >  

    <Alert alert={alert}/>
    <div className="container my3" >

    <Switch>
          <Route  exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading = "Enter your Text to Analyze" mode = {mode} /  > 
          </Route>
        </Switch>


    </div>
    </Router>
  </>
  );
}

export default App;
