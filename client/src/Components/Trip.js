import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import * as TripServices from "../services/trip-services";

class Trip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: [],
      imageStatus: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  addPhotos = () => {
    TripServices.addPhotosService(
      this.state.imageUrl,
      this.props.match.params.id
    )
      .then(trip => {
        console.log(trip);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleUploadImages = images => {
    this.setState({
      imageStatus: "Loading..."
    });

    const final = [];
    // uploads is an array that would hold all the post methods for each image to be uploaded, then we'd use axios.all()
    const uploads = images.map(image => {
      // our formdata
      const formData = new FormData();
      formData.append("file", image);
      // formData.append("tags", "{TAGS}"); // Add tags for the images - {Array}
      formData.append("upload_preset", "e3kxwxiy"); // Replace the preset name with your own
      formData.append("api_key", "676778632785877"); // Replace API key with your own Cloudinary API key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      // Replace cloudinary upload URL with yours
      return axios
        .post(
          `https://api.cloudinary.com/v1_1/dz3ipymey/image/upload`,
          formData,
          { headers: { "X-Requested-With": "XMLHttpRequest" } }
        )
        .then(response => {
          final.push({ image: response.data.url });
          this.setState({
            imageUrl: final
          });
        });
    });

    // We would use axios `.all()` method to perform concurrent image upload to cloudinary.
    axios.all(uploads).then(() => {
      this.setState({
        imageStatus: "Done"
      });
      this.setState({
        imageUrl: final
      });

      console.log("Images have all being uploaded", uploads);
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Your Trip</h1>
        <Dropzone onDrop={this.handleUploadImages}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <strong>
                <p className="border p-3">
                  Drag and Drop Photos or Click to Add
                </p>
              </strong>
            </div>
          )}
        </Dropzone>
        <button type="submit" onClick={this.addPhotos}></button>
      </div>
    );
  }
}

export default Trip;
