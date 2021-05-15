import React, { Component } from "react";
import * as CityServices from "../services/city-services";
import { Image, CloudinaryContext, Transformation } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../services/cloudinary.js";

export default class CityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      imageUrl: ""
    };
  }

  beginUpload = (e, tag) => {
    e.preventDefault()
    const uploadOptions = {
      cloudName: "dz3ipymey",
      tags: [tag, 'anImage'],
      uploadPreset: "e3kxwxiy",
      folder: 'remoteyear'
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if (photos.event === 'success') {
          console.log(JSON.stringify(photos))
          this.setState({
            imageUrl: photos.info.url
          });
        }
      } else {
        console.log(error);
      }
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { title, description, imageUrl } = this.state;

    CityServices.addService({
      title,
      description,
      imageUrl
    })
      .then(response => {
        this.props.history.push(`/city/${response.title}`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div class="container">
        <h1>New City</h1>
        <form>
          <div class="form-group">
            <label for="City-name">City Name</label>
            <input
              type="text"
              class="form-control"
              id="City-name"
              name="title"
              aria-describedby="Cityname"
              placeholder="Enter City Name"
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
          <form>
            <div className="form-group">
              <CloudinaryContext cloudName="dz3ipymey">
                <div className="App">
                  <button class="btn btn-outline-warning" onClick={(e) => this.beginUpload(e, "image")}>Choose Image</button>
                </div>
              </CloudinaryContext>
            </div>
          </form>
          <button
            type="submit"
            class="btn btn-outline-warning"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
