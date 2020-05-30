import React from 'react';
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Landing from "./components/landing.js";
import Form from "./components/formApplication.js"
import Form1 from "./components/formReport.js"
import { HashRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
     <Navbar/>
      <Router>
                <div>
                    <Route path ="/" exact component={Landing}/>
                    <Route path ="/application" component={Form}/>
                    <Route path ="/report" component={Form1}/>
                </div>
      </Router>

    <Footer/>

    </React.Fragment>
  );
}

export default App;
