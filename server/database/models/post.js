const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;
const User = require("./user");

const PostSchema = new Schema(
  {
    title: {
      type: String
    },
    description: {
      type: String,
    },
    url: {
      type: String,
    },
    imagePreview:
    {
      type: String,
    },
    favIcon:
    {
      type: String,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    city:
    {
      type: String,
    },
    imageUrl:
    {
      type: String,
    },
    postType:
    {
      type: String,
    },
    comment: [{
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      comment: String
    }]

  },
);

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
