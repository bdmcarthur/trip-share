const express = require("express");
const router = express.Router();
const User = require("../database/models/user");
const passport = require("../passport");

router.post("/signup", (req, res) => {
  const { username, password, name } = req.body;
  // ADD VALIDATION
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`
      });
    } else {
      const newUser = new User({
        username: username,
        password: password,
        name: name,
        followedTrips: []
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        req.login(savedUser, function (err) {
          if (err) {
            console.log(err);
          }
          res.send(savedUser);
        });
      });
    }
  });
});

router.post(
  "/login",
  function (req, res, next) {
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    res.send(req.user);
  }
);

router.get("/", (req, res, next) => {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

router.post("/addFriendTrip", (req, res, next) => {
  let tripID = req.body.tripID;
  let userID = req.user._id;

  User.findOneAndUpdate(
    { _id: userID },
    { $push: { followedTrips: tripID } }, { new: true }
  )
    .then(item => {
      res.send({ msg: "City Added" });
    })
    .catch(error => {
      next(error);
    });
});


module.exports = router;
