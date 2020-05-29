import React from 'react';
import Form from './components/formReport.js';
import Appbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Landing from "./components/landing.js";




function App() {
  return (
    <React.Fragment>
     <Appbar/>
    
    <Form/>
    <Footer/>
    
    </React.Fragment>
  );
}

export default App;
