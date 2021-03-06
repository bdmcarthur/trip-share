const { join } = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const passport = require("./server/passport");
require('dotenv').config({ path: __dirname + '/../.env' });
const app = express();
const PORT = process.env.PORT;

// Route requires
const user = require("./server/routes/user");
const city = require("./server/routes/city");
const post = require("./server/routes/post");

// MIDDLEWARE
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "/client/build")));

// Sessions
app.use(
  expressSession({
    secret: "secret123",
    cookie: { maxAge: 60 * 60 * 24 * 1000 },
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60
    })
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Routes
app.use("/user", user);
app.use("/city", city);
app.use("/post", post);

app.get("*", (req, res, next) => {
  res.sendFile(join(__dirname, "/client/build/index.html"));
});

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
