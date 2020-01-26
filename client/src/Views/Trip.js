import React, { Component } from "react";
import * as TripServices from "../services/trip-services";
import { Link } from "react-router-dom";
import { EmailShareButton } from "react-share";

class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: [],
      imageUrl: [],
      imageStatus: "",
      isOwner: false
    };
  }

  componentDidMount = () => {
    this.loadTrip();
  };

  loadTrip = () => {
    TripServices.loadTripService(this.props.match.params.id)
      .then(trip => {
        let isOwner = false;
        if (trip.user === this.props.user._id) {
          isOwner = true;
        }
        this.setState({
          trip: trip,
          isOwner: isOwner
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let trip = this.state.trip;
    let followedTrips = this.props.user.followedTrips || [];

    return (
      <div className="container text-center mb-5">
        {this.state.isOwner === true ||
        followedTrips.includes(this.state.trip._id) ? (
          <div>
            <h1 className="mt-4">{trip.title}</h1>
            {this.state.isOwner === true && (
              <div>
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
              </div>
            )}
            <div class="container">
              {trip.imageUrl && (
                <div class="row">
                  {trip.imageUrl.map(trip => (
                    <div class="col-lg-4">
                      <img class="w-100" alt="trip" src={trip.image}></img>
                      <p>{trip.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <h1>Not Authorized</h1>
        )}
      </div>
    );
  }
}

export default AddPhoto;
