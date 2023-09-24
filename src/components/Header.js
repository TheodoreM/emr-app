import React, { Component } from "react";
import img from 'assets./1206.jpg'

class Header extends Component {
    render() {
        return (
            <div className="text-center">
                <img
                    src={img}
                    width="300"
                    className="img-thumbnail"
                    style={{ marginTop: "20px" }}
                />
                <hr />
                <h5>
                    <i>Welcome to</i>
                </h5>
                <h1>HealthHub</h1>
            </div>
        );
    }
}

export default Header;