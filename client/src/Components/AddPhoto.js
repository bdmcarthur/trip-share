import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import * as CityServices from "../services/city-services";

class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: [],
      imageUrl: [],
      imageStatus: ""
    };
  }

  componentDidMount = () => {
    this.loadCity();
  };

  loadCity = () => {
    CityServices.loadCityService(this.props.match.params.id)
      .then(city => {
        this.setState({
          city: city
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  addDescription = (e, i) => {
    let state = [...this.state.imageUrl];
    let description = state[i];
    description["description"] = e.target.value;
    let imageUploadTime = 'Date.now()'
    imageUploadTime["imageUploadTime"] = Date.now();
    this.setState({
      imageUrl: state
      // test: [...new Set(this.state.imageUrl, this.state.city.imageUrl)]
    });
  };

  addPhotos = () => {
    CityServices.addPhotosService(
      this.state.imageUrl.concat(this.state.city.imageUrl),
      this.props.match.params.id
    )
      .then(city => {
        this.props.history.push(`/city/${this.state.city._id}`);
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
    let city = this.state.city;

    return (
      <div className="container">
        <h1 className="text-center">Your City</h1>
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

        <div class="container">
          {city.imageUrl && (
            <div class="row">
              {this.state.imageUrl.map((city, index) => (
                <div class="col-lg-4">
                  <img class="w-100" alt="city" src={city.image}></img>

                  <textarea
                    rows="4"
                    className="w-100"
                    placeholder="Add a description"
                    onChange={e => {
                      this.addDescription(e, index);
                    }}
                  />
                </div>
              ))}
            </div>
          )}
          {this.state.imageUrl.length > 0 && (
            <button
              class="btn btn-lg btn-success d-block mx-auto"
              type="submit"
              onClick={this.addPhotos}
            >
              Add To City
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default AddPhoto;
