import React from 'react';
import Form from './components/form2.js';
import Appbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <React.Fragment>
    <Appbar/>
    <Form />
    <Footer/>
    </React.Fragment>
  );
}

export default App;

