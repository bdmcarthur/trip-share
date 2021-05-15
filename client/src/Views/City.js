import React, { Component } from "react";
import * as CityServices from "../services/city-services";
import * as PostServices from "../services/post-services";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faNewspaper, faStickyNote, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Image, CloudinaryContext, Transformation } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../services/cloudinary.js";
import { Link } from "react-router-dom";


class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityInfo: [],
      posts: [],
      type: "",
      showModal: false,
      link: "",
      description: "",
      imageUrl: "",
      fileName: "",
      commentId: "",
      commentText: ""
    };
  }

  componentDidMount = () => {
    this.loadCity();
    this.loadPosts();
  };

  loadPosts = () => {
    PostServices.loadPostsService(this.props.match.params.title)
      .then(posts => {
        this.setState({
          posts: posts
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  loadCity = () => {
    CityServices.loadCityService(this.props.match.params.title)
      .then(city => {
        this.setState({
          cityInfo: city
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  addNewPost = (name) => {
    this.setState({
      type: name,
      showModal: true
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      link: "",
      description: ""
    });
  };

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

  handlePostSubmit = async event => {
    event.preventDefault();

    const { description, link, type, imageUrl } = this.state;
    const city = this.state.cityInfo.title
    PostServices.addService({
      description,
      link,
      type,
      city,
      imageUrl
    })
      .then(response => {
        this.closeModal()
        this.loadPosts();
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleCommentSubmit = async event => {
    event.preventDefault();
    const { commentId, commentText } = this.state;

    PostServices.addCommentService({
      commentId,
      commentText
    })
      .then(response => {
        this.setState({
          commentId: ""
        });
        this.loadPosts();
      })
      .catch(error => {
        console.log(error);
      });
  };

  openComments = (id) => {
    this.setState({
      commentId: id
    });
  };


  render() {
    let cityInfo = this.state.cityInfo;
    let posts = this.state.posts
    let showModal = this.state.showModal
    let type = this.state.type

    let message;
    if (this.state.imageUrl) {
      message = <p class='d-inline ml-4'>{this.state.imageUrl.slice(this.state.imageUrl.lastIndexOf("/") + 1)}</p>;
    } else {
      message = <p class='d-inline ml-4'>No file selected</p>;
    }

    return (
      <div className="posts mb-5">
        <div className='text-center'>
          {cityInfo && (
            <div>
              <h1 className="mt-4 cityTitle">{cityInfo.title}</h1>
              <div class='container'>
                <button className="p-4 btn buttonWrap" onClick={() => this.addNewPost("image")}>
                  <FontAwesomeIcon icon={faImage} size={"2x"} />
                  <p class="buttonDesc">Add a photo</p>
                </button>
                <button className="p-4 btn buttonWrap" onClick={() => this.addNewPost("article")}>
                  <span class="buttonDesc">Add an article</span>
                  <FontAwesomeIcon icon={faNewspaper} size={"2x"} />
                </button>
                <button className="p-4 btn buttonWrap" onClick={() => this.addNewPost("note")}>
                  <span class="buttonDesc">Add a note</span>
                  <FontAwesomeIcon icon={faStickyNote} size={"2x"} />
                </button>
              </div>
            </div>
          )}
          {posts && (
            <div class="row justify-content">
              {posts.map(post => {
                if (post.postType == 'article') {
                  return (
                    <div class="col-md-4 mt-4 article card1">
                      <a href={post.url} target="_blank">
                        <h4 class='text-dark text-left mt-3 title'>{post.title}</h4>
                        <p class='text-left url'>{post.url.match(/^https?:\/\/[^#?\/]+/).toString().replace("https://", "")}</p>
                        <img src={post.imagePreview} class="w-100"></img>
                      </a>

                      { post.description && <p class=' text-left pt-2 mt-2 desc'>{post.description}</p>}

                      <button class="btn d-block" >
                        <p onClick={() => this.openComments(post._id)} class="mt-2 text-dark text-left">{post.comment.length == 1 ? post.comment.length + ' Comment' : post.comment.length + ' Comments'} <FontAwesomeIcon className="mt-1 text-right text-dark" icon={faPlus} size={"1x"} /></p>
                      </button>

                      {this.state.commentId == post._id && (
                        <div>
                          {
                            post.comment && (
                              <div class="">
                                {post.comment.map(comment => {
                                  return (
                                    <div class="border-bottom">
                                      <p class="text-left text-dark mt-2 mb-0">{comment.comment}</p>
                                      <p class="text-right name">{comment.user.name}</p>
                                    </div>
                                  )
                                })}

                              </div>
                            )
                          }
                          < form class="form-group text-right">
                            <textarea onChange={this.handleChange} class="form-control" rows="3" type="text" id="commentText" name="commentText"></textarea>
                            <button type="submit" class="mt-2 btn btn-outline-warning" onClick={this.handleCommentSubmit}>
                              Add
                        </button>
                          </form>
                        </div>
                      )
                      }

                    </div>)
                }
                else if (post.postType == 'image') {
                  return (<div class="col-md-4 mt-4 image card1">
                    <h4 class="text-left mt-3 text-dark title">{post.description}</h4>
                    <img data-toggle="modal" data-target={'#img' + post._id} src={post.imageUrl} class="w-100"></img>
                    <div id={'img' + post._id} class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                          <img src={post.imageUrl} class=""></img>
                        </div>
                      </div>
                    </div>
                    {/* <p class="text-dark text-left">{post.comment.length == 1 ? post.comment.length + ' Comment' : post.comment.length + ' Comments'}</p> */}
                    <button><FontAwesomeIcon icon={faPlus} size={"1x"} /></button>
                  </div>)
                }
                else if (post.postType == 'note') {
                  return (
                    <div class="col-md-4 card1 mt-4 note">
                      <h3 class='text-center'>{post.description}</h3>
                      {/* <p class="text-dark text-left">{post.comment.length == 1 ? post.comment.length + ' Comment' : post.comment.length + ' Comments'}</p> */}
                      <button >
                        <FontAwesomeIcon icon={faPlus} size={"1x"} /></button>
                    </div>)
                }

              }
              )}
            </div>
          )}
        </div>

        {
          showModal && (
            <div class="modal1" id="modal1">
              <div class="content">
                <div class="text-right">
                  <button class="toggle-button btn" onClick={this.closeModal}>
                    <FontAwesomeIcon icon={faTimes} size={"1x"} />
                  </button>
                </div>
                <h2 class='text-center pb-3'>ADD {type.toUpperCase()}</h2>
                <form>
                  {type == 'article' &&
                    <div class="form-group">
                      <label for="link">Link</label>
                      <input
                        type="text"
                        class="form-control"
                        id="link"
                        name="link"
                        placeholder="Enter Link"
                        value={this.state.link}
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  }
                  {type == 'image' &&
                    <div className="form-group">
                      <CloudinaryContext cloudName="dz3ipymey">
                        <div className="App">
                          <button class="btn btn-outline-warning" onClick={(e) => this.beginUpload(e, "image")}>Choose Image</button>
                          {message}
                        </div>
                      </CloudinaryContext>
                    </div>}
                  <div class="form-group">
                    <label for="description">Description</label>
                    <textarea
                      class="form-control"
                      name="description"
                      id="description"
                      rows="6"
                      value={this.state.description}
                      onChange={this.handleChange}
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-outline-warning" onClick={this.handlePostSubmit}>
                    Submit
                </button>
                </form>
              </div>
            </div>
          )
        }

      </div >

    )
  }
}

export default City;
