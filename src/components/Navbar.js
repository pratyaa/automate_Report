import React from "react";
import {Navbar, NavbarBrand} from "reactstrap";

const Appbar = () => {
    return (
        <div>
            <Navbar style={{textAlign: "center", height: "65px",backgroundColor:"#00203f",color:"white"}} color="light" dark expand="sm">
                <NavbarBrand style={{fontSize: "40px"}}>Document Generator</NavbarBrand>
            </Navbar>
        </div>
    );
};

export default Appbar;
