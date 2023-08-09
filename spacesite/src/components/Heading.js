import React from "react";
import logo from "../assets/shared/logo.svg";
import nav from "../assets/shared/icon-hamburger.svg";
import Hamburger from "./Hamburger";
import { useState } from "react";
import { slide as Menu } from 'react-burger-menu';

class Heading extends React.Component {
    
    render() {
        return (
                <div className="Heading">
                    <div>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div>
                        <Hamburger></Hamburger>
                    </div>
                </div>
            );
        };
    }

export default Heading;
