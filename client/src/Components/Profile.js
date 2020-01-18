import React from "react";

const Profile = props => {
  let user = props.user;

  return (
    <div>
      {user && (
        <div className="container text-center">
          <h1>Hello, {props.user.name}</h1>
        </div>
      )}
    </div>
  );
};

export default Profile;
