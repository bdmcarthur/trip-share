import axios from "axios";

const postAPI = axios.create({
  baseURL: `/post`
});

export const addService = ({
  link,
  description,
  type,
  city,
  imageUrl
}) =>
  new Promise((resolve, reject) => {
    postAPI
      .post("/add", {
        link,
        description,
        type,
        city,
        imageUrl
      })
      .then(response => {
        const post = response.data.data;
        resolve(post);
      })
      .catch(error => {
        reject(error);
      });
  });

export const addCommentService = ({
  commentId,
  commentText
}) =>
  new Promise((resolve, reject) => {
    postAPI
      .post("/addComment", {
        commentId,
        commentText
      })
      .then(response => {
        const post = response.data.data;
        resolve(post);
      })
      .catch(error => {
        reject(error);
      });
  });

export const loadPostsService = cityTitle =>
  new Promise((resolve, reject) => {
    postAPI
      .get(`/posts/${cityTitle}`)
      .then(response => {
        resolve(response.data.data.post);
      })
      .catch(error => {
        console.log("Cities", error);
      });
  });
