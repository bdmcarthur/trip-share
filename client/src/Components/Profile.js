import React from "react";
import { Link } from "react-router-dom";

const Profile = props => {
  let user = props.state.user;
  let trips = props.state.trips;

  return (
    <div>
      {user && (
        <div className="container text-center">
          <h1>Hello, {user.name}</h1>
          {trips && (
            <div>
              {trips.map(trip => (
                <Link to={`/trip/${trip._id}`}>
                  <h4>{trip.title}</h4>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
