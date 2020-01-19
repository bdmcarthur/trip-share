import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import * as AuthenticationServices from "../services/auth-services";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  logout = event => {
    event.preventDefault();
    AuthenticationServices.logOutService()
      .then(response => {
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            user: null
          });
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let loggedIn = this.props.loggedIn;
    let user = this.props.user;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="btn btn-link text-secondary">
          <span className="text-secondary">Home</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          {loggedIn ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to={`/user/${user._id}`}
                  className="btn btn-link text-secondary"
                >
                  <span className="text-secondary">Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className="btn btn-link text-secondary"
                  onClick={this.logout}
                >
                  <span className="text-secondary">Log Out</span>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/signup" className="btn btn-link">
                  <span className="text-secondary">Sign up</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="btn btn-link text-secondary">
                  <span className="text-secondary">Login</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
