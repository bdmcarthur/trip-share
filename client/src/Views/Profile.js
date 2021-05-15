import React from "react";
import { Link } from "react-router-dom";

const Profile = props => {
  let user = props.state.user;
  let cities = props.state.cities;

  return (
    <div>
      {user && (
        <div className="container text-center">
          <h1>Hello, {user.name}</h1>
          {cities && (
            <div>
              {cities.map(city => (
                <Link to={`/city/${city._id}`}>
                  <h4>{city.title}</h4>
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
