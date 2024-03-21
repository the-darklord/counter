import React, { Component } from "react";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark ms-5">
                <a className="navbar-brand col-12 ms-5" href=".">
                    &nbsp;&nbsp;&nbsp;&nbsp; Navbar &nbsp;&nbsp;&nbsp;&nbsp;
                    {" -> "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {"Active Counters :"}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="badge rounded-pill text-bg-primary ms-5">
                        {this.props.totalCounters}
                    </span>
                </a>
            </nav>
        );
    }
}

export default NavBar;
