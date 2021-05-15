const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;
const User = require("./user");

const CitySchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl:
    {
      type: String,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
);

const City = mongoose.model("City", CitySchema);
module.exports = City;
