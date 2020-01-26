import React, { Component } from "react";
import * as TripServices from "../services/trip-services";

export default class TripForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      imageUrl: [],
      dateEnd: "",
      dateStart: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, description, imageUrl, dateEnd, dateStart } = this.state;
    TripServices.addService({
      title,
      description,
      imageUrl,
      dateEnd,
      dateStart
    })
      .then(response => {
        this.props.history.push(`/trip/${response._id}`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div class="container">
        <h1>New Trip</h1>
        <form>
          <div class="form-group">
            <label for="trip-name">Trip Name</label>
            <input
              type="text"
              class="form-control"
              id="trip-name"
              name="title"
              aria-describedby="tripname"
              placeholder="Enter Trip Name"
              value={this.state.title}
              onChange={this.handleChange}
            ></input>
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea
              class="form-control"
              name="description"
              id="exampleFormControlTextarea1"
              rows="3"
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div class="form-group">
            <label for="dateStart">Start Date</label>
            <input
              type="date"
              className="form-control"
              id="dateStart"
              name="dateStart"
              value={this.state.dateStart}
              onChange={this.handleChange}
            ></input>
          </div>
          <div class="form-group">
            <label for="dateEnd">End Date (Optional)</label>
            <input
              type="date"
              className="form-control"
              id="dateEnd"
              name="dateEnd"
              value={this.state.dateEnd}
              onChange={this.handleChange}
            ></input>
          </div>

          <button
            type="submit"
            class="btn btn-danger"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
