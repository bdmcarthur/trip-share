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
    .then(plan => {
      res.json({ type: "success", data: { plan } });
    })
    .catch(error => {
      next(error);
    });
});

router.post("/getTrips", (req, res, next) => {
  let user = req.body.user;
  Trip.find({ user: user })
    .then(plan => {
      res.json({ type: "success", data: { plan } });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/loadTrip/:id", (req, res, next) => {
  Trip.find({ _id: req.params.id })
    .populate("user")
    .then(plan => {
      res.json({ type: "success", data: { plan } });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
