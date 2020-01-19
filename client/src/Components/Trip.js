import React, { Component } from "react";
import * as TripServices from "../services/trip-services";
import { Link } from "react-router-dom";

class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: [],
      imageUrl: [],
      imageStatus: ""
    };
  }

  componentDidMount = () => {
    this.loadTrip();
  };

  loadTrip = () => {
    TripServices.loadTripService(this.props.match.params.id)
      .then(trip => {
        this.setState({
          trip: trip
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let trip = this.state.trip;

    return (
      <div className="container">
        <h1 className="text-center">Your Trip</h1>
        <Link to={`/trip/${trip._id}/edit`}>Add New Photos</Link>
        <div class="container">
          {trip.imageUrl && (
            <div class="row">
              {trip.imageUrl.map(trip => (
                <div class="col-lg-4">
                  <img class="w-100" src={trip.image}></img>
                  <p>{trip.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AddPhoto;
