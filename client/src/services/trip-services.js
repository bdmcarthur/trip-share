import axios from "axios";

const tripAPI = axios.create({
  baseURL: `/trip`
});

export const addService = ({
  title,
  description,
  imageUrl,
  dateEnd,
  dateStart
}) =>
  new Promise((resolve, reject) => {
    tripAPI
      .post("/add", {
        title,
        description,
        imageUrl,
        dateEnd,
        dateStart
      })
      .then(response => {
        const trip = response.data.data.plan;
        resolve(trip);
      })
      .catch(error => {
        reject(error);
      });
  });

export const getTripsService = user =>
  new Promise((resolve, reject) => {
    tripAPI
      .post("/getTrips", user)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(error => {
        console.log("Trips", error);
      });
  });
