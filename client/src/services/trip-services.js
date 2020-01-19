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
        const trip = response.data.data.trip;

        resolve(trip);
      })
      .catch(error => {
        reject(error);
      });
  });

export const getTripsService = () =>
  new Promise((resolve, reject) => {
    tripAPI
      .post("/getTrips")
      .then(response => {
        resolve(response.data.data.trip);
      })
      .catch(error => {
        console.log("Trips", error);
      });
  });

export const addPhotosService = (photos, userId) =>
  new Promise((resolve, reject) => {
    tripAPI
      .post(`/trip/${userId}/edit`, { photos })
      .then(response => {
        resolve(response.data.data.trip);
      })
      .catch(error => {
        console.log("Trips", error);
      });
  });
