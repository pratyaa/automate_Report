import React from 'react';
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Main from "./components/main.js";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Main/>
      <Footer />

    </React.Fragment>
  );
}

export default App;
