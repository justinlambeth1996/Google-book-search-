// Importing React/Routing/CSS 
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Create Nav component
class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

//   Setting new state 
  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

//   Opening Nav and setting new state 
  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

//  Resizing after new state  
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

//   Render Nav bar component 
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// Exporting Nav 
export default Nav;
