const express = require("express");
const router = express.Router();
const User = require("../database/models/user");
const Trip = require("../database/models/trip");

router.post("/add", (req, res, next) => {
  const { title, description, imageUrl, dateEnd, dateStart } = req.body;
  Trip.create({
    title,
    description,
    imageUrl,
    dateEnd,
    dateStart,
    user: req.user
  })
    .then(trip => {
      res.json({ type: "success", data: { trip } });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/getTrips", (req, res, next) => {
  let user = req.user;
  Trip.find({ user: user })
    .then(trip => {
      res.json({ type: "success", data: { trip } });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/:id", (req, res, next) => {
  let user = req.user;
  Trip.find({ _id: req.params.id })
    .then(trip => {
      res.json({ type: "success", data: { trip } });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/loadTrip/:id", (req, res, next) => {
  Trip.find({ _id: req.params.id })
    .populate("user")
    .then(trip => {
      res.json({ type: "success", data: { trip } });
    })
    .catch(error => {
      next(error);
    });
});

router.post("/:id/edit", (req, res, next) => {
  let id = req.params.id;
  let imageUrl = req.body.photos;
  console.log(id, imageUrl);
  Trip.findOneAndUpdate(
    { _id: id },
    { ...(imageUrl && { imageUrl }) },
    { new: true }
  )
    .then(item => {
      console.log(item);
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
