const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;
const User = require("./user");

// Define userSchema
const TripSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: [
      {
        image: String,
        description: String
      }
    ],
    imageUploadTime: {
      type: Date
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    location: {
      type: Object
    },
    dateStart: {
      type: String
    },
    dateEnd: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Trip = mongoose.model("Trip", TripSchema);
module.exports = Trip;
