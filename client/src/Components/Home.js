import React from "react";
import { Link } from "react-router-dom";
import Feed from "./Feed"

const Home = (props) => {
  return (
    <div className="container text-center mt-4">
      <h1>Trip Share</h1>
      <p>
        Privately share your pictures and experiences with your friends and
        family
      </p>
      <Link to="/trip/new" className="btn btn-danger">
        Add New Trip
      </Link>
      <Feed user={props.user}></Feed>
    </div >
  );
};

export default Home;
