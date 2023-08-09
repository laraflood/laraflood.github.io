import React from "react";
import logo from "../assets/shared/logo.svg";
import nav from "../assets/shared/icon-hamburger.svg";

class Heading extends React.Component {
    render() {
        return (
            <div className="Heading">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <img src={nav} alt="Menu" />

                </div>
                { /* <nav>
                    <ul>
                        <li><a href="#">00 Home</a></li>
                        <li><a href="#">01 Destination</a></li>
                        <li><a href="#">03 Crew</a></li>
                        <li><a href="#">04 Technology</a></li>
                    </ul>
        </nav> */}
            </div>
        );
    }
}

export default Heading;