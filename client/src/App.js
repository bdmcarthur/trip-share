import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Views/Profile";
import AddCityForm from "./Views/AddCity";
import City from "./Views/City";
import Cities from "./Views/Cities";
import AddPhoto from "./Components/AddPhoto";
import ProtectedRoute from "./Components/ProtectedRoute";
import * as CityServices from "./services/city-services";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: null,
      userLoaded: false
    };
  }

  componentDidMount = () => {
    this.getUser();
  };

  updateUser = userObject => {
    this.setState(userObject);
  };

  getUser = () => {
    axios.get("/user/").then(response => {
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session");
        this.setState({
          loggedIn: true,
          user: response.data.user,
          userLoaded: true
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          user: null,
          userLoaded: true
        });
      }
    });
  };

  render() {
    // const PrivateRoute = ({ component: Component, ...rest }) => (
    //   <Route
    //     {...rest}
    //     render={props =>
    //       this.state.user.followedCities.includes() ? (
    //         <Component {...props} />
    //       ) : (
    //         <Redirect to="/login" />
    //       )
    //     }
    //   />
    // );

    return (
      <BrowserRouter>
        <Navbar
          updateUser={this.updateUser}
          user={this.state.user}
          loggedIn={this.state.loggedIn}
        />
        {this.state.userLoaded && (
          <Switch>
            <Route
              exact
              path="/"
              user={this.state.user}
              render={props => <Home {...props} user={this.state.user} />}
            />
            <Route
              exact
              path="/login"
              render={props => <Login {...props} updateUser={this.updateUser} />}
            />
            <Route
              exact
              path="/signup"
              render={props => <Signup {...props} updateUser={this.updateUser} />}
            />
            <ProtectedRoute
              path="/user/:id"
              user={this.state.user}
              render={props => <Profile {...props} state={this.state} />}
            />
            <ProtectedRoute
              path="/cities"
              user={this.state.user}
              render={props => <Cities {...props} state={this.state} />}
            />
            <ProtectedRoute
              path="/city/new"
              exact
              user={this.state.user}
              render={props => (
                <AddCityForm {...props} user={this.state.user} />
              )}
            />
            <ProtectedRoute
              path="/city/:title/edit"
              user={this.state.user}
              render={props => <AddPhoto {...props} user={this.state.user} />}
            />
            <ProtectedRoute
              path="/city/:title"
              user={this.state.user}
              render={props => <City {...props} user={this.state.user} />}
            />

          </Switch>
        )}
      </BrowserRouter>
    );
  }
}

export default App;
