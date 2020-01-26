import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Signup from "./Components/Signup";
import LoginForm from "./Components/Login";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Views/Profile";
import AddTripForm from "./Views/AddTrip";
import Trip from "./Views/Trip";
import AddPhoto from "./Components/AddPhoto";
import ProtectedRoute from "./Components/ProtectedRoute";
import * as TripServices from "./services/trip-services";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: null,
      userLoaded: false,
      trips: null
    };
  }

  componentDidMount = () => {
    this.getUser();
    this.getTrips();
  };

  updateUser = userObject => {
    this.setState(userObject);
    this.getTrips();
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

  getTrips = () => {
    TripServices.getTripsService()
      .then(trip => {
        this.setState({
          trips: trip
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    // const PrivateRoute = ({ component: Component, ...rest }) => (
    //   <Route
    //     {...rest}
    //     render={props =>
    //       this.state.user.followedTrips.includes() ? (
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
            <Route exact path="/" component={Home} />
            <Route
              path="/login"
              render={() => <LoginForm updateUser={this.updateUser} />}
            />
            <Route
              path="/signup"
              render={() => <Signup updateUser={this.updateUser} />}
            />
            <ProtectedRoute
              path="/user/:id"
              user={this.state.user}
              render={props => <Profile {...props} state={this.state} />}
            />
            <ProtectedRoute
              path="/trip/new"
              exact
              user={this.state.user}
              render={props => (
                <AddTripForm {...props} user={this.state.user} />
              )}
            />
            <ProtectedRoute
              path="/trip/:id/edit"
              user={this.state.user}
              render={props => <AddPhoto {...props} user={this.state.user} />}
            />
            <ProtectedRoute
              path="/trip/:id"
              user={this.state.user}
              render={props => <Trip {...props} user={this.state.user} />}
            />
          </Switch>
        )}
      </BrowserRouter>
    );
  }
}

export default App;
