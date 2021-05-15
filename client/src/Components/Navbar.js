import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faUser, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

import * as AuthenticationServices from "../services/auth-services";

class Navbar extends Component {
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
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className="btn">
          <FontAwesomeIcon icon={faSuitcase} size={"2x"} />
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
                  to={`/cities`}
                  className="btn"
                >
                  <FontAwesomeIcon icon={faGlobeAmericas} size={"2x"} />
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={`/user/${user._id}`}
                  className="btn"
                >
                  <FontAwesomeIcon icon={faUser} size={"2x"} />
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link
                  to="#"
                  className="btn"
                  onClick={this.logout}
                >
                  <span className="">Log Out</span>
                </Link>
              </li> */}
            </ul>
          ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/signup" className="btn">
                    <span className="">Sign up</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="btn">
                    <span className="">Login</span>
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
