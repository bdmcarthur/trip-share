const express = require("express");
const router = express.Router();
const User = require("../database/models/user");
const Post = require("../database/models/post");

const preview = require("link-preview-js");

router.post("/add", async function (req, res, next) {
  console.log("Adding new post " + JSON.stringify(req.body))
  const { link, description, city, imageUrl } = req.body;
  const postType = req.body.type
  let imagePreview = ""
  let favIcon = ""
  let title = ""
  let url = ""
  if (req.body.type == 'article') {
    await preview.getLinkPreview(req.body.link)
      .then((data) => {
        console.log(JSON.stringify(data))
        url = data.url
        title = data.title
        imagePreview = data.images[0]
        favIcon = data.favicons[0]
      });
  }

  Post.create({
    link,
    description,
    imagePreview,
    title,
    city,
    imageUrl,
    user: req.user,
    postType,
    favIcon,
    url
  })
    .then(post => {
      res.json({ type: "success", data: { post } });
    })
    .catch(error => {
      next(error);
    });
});

router.post("/addComment", async function (req, res, next) {
  console.log("Adding new comment " + JSON.stringify(req.body))
  const { commentId, commentText } = req.body;

  Post.findOneAndUpdate(
    { _id: commentId },
    {
      $push: {
        comment: {
          comment: commentText,
          user: req.user
        }
      }
    })
    .then(post => {
      res.json({ type: "success", data: { post } });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/posts/:title", (req, res, next) => {
  let user = req.user;
  Post.find({ city: req.params.title })
    .populate("comment.user")
    .then(post => {
      res.json({ type: "success", data: { post } });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
