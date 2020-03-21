import React, { Component } from "react";
import * as TripServices from "../services/trip-services";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    };
  }

  componentDidMount = () => {
    this.loadTrips();
  };

  loadTrips = () => {
    TripServices.getFriendsTripsService()
      .then(trips => {
        this.setState({
          trips: trips
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <h1>Feed</h1>
      </div>
    );
  }
}

export default Feed;
