const express = require("express");
const router = express.Router();
const User = require("../database/models/user");
const City = require("../database/models/city");
const Post = require("../database/models/post");
const preview = require("link-preview-js");
router.post("/add", (req, res, next) => {
  console.log("Adding new city " + JSON.stringify(req.body))
  const { title, description, imageUrl } = req.body;
  City.create({
    title,
    description,
    imageUrl,
    user: req.user
  })
    .then(city => {
      res.json({ type: "success", data: { city } });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/getUserCities", (req, res, next) => {
  let user = req.user._id;
  City.find({ user: user })
    .then(city => {
      res.json({ type: "success", data: { city } });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/getFriendsCities", (req, res, next) => {
  let user = req.user._id;
  User.findOne({ _id: user })
    .populate("followedCities")
    .then(items => {
      res.json({ type: "success", data: { items } });
    })
    .catch(error => {
      next(error);
    });
});


router.get("/:title", (req, res, next) => {
  let user = req.user;
  City.find({ title: req.params.title })
    .then(city => {
      res.json({ type: "success", data: { city } });
    })
    .catch(error => {
      next(error);
    });
});



router.get("/loadTrip/:id", (req, res, next) => {
  City.find({ _id: req.params.id })
    .populate("user")
    .then(city => {
      res.json({ type: "success", data: { city } });
    })
    .catch(error => {
      next(error);
    });
});

router.post("/:id/edit", (req, res, next) => {
  let id = req.params.id;
  let imageUrl = req.body.photos;

  City.findOneAndUpdate(
    { _id: id },
    { $push: { imageUrl: imageUrl } }
  )
    .then(item => {

      if (item) {
        res.json({ type: "success", data: { item } });
      } else {
        next(new Error("POST_COULD_NOT_BE_EDITED"));
      }
    })
    .catch(error => {
      next(error);
    });
});


module.exports = router;
