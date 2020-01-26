import React, { Component } from "react";
import * as TripServices from "../services/trip-services";
import { Link } from "react-router-dom";
import { EmailShareButton, EmailIcon } from "react-share";

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
      <div className="container text-center mb-5">
        {trip && (
          <div>
            <h1 className="mt-4">{trip.title}</h1>
            <Link
              to={`/trip/${trip._id}/edit`}
              className="btn btn-success my-4 mx-3"
            >
              Add New Photos
            </Link>
            <EmailShareButton
              url={`http://localhost:3000/trip/${trip._id}`}
              subject={trip.title}
              body={`Follow me on my trip!`}
            >
              <div className="btn btn-success my-4 mx-3 text-white">
                Share <i class="ml-2 fa fa-envelope"></i>
              </div>
              {/* <EmailIcon round={true} /> */}
            </EmailShareButton>
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
        )}
      </div>
    );
  }
}

export default AddPhoto;
