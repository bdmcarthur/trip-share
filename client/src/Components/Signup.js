import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as AuthenticationServices from "../services/auth-services";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      name: "",
      redirectTo: null
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, password, name } = this.state;
    AuthenticationServices.signUpService({
      username,
      password,
      name
    })
      .then(user => {
        this.props.updateUser({
          loggedIn: true,
          user: user
        });
        this.setState({
          redirectTo: "/"
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="container">
          <h4>Sign up</h4>
          <form>
            <div className="form-group text-left">
              <label htmlFor="username">Email address</label>
              <input
                type="email"
                className="form-control"
                autoComplete="username"
                id="username"
                name="username"
                aria-describedby="emailHelp"
                value={this.state.username}
                onChange={this.handleChange}
              ></input>
            </div>

            <div className="form-group text-left">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                aria-describedby="emailHelp"
                className="form-control"
                value={this.state.name}
                onChange={this.handleChange}
              ></input>
            </div>

            <div className="form-group text-left">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                autoComplete="new-password"
                className="form-control"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              ></input>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Sign Up
            </button>
          </form>
        </div>
      );
    }
  }
}

export default Signup;
