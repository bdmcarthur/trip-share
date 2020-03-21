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
      .get("/getUserTrips")
      .then(response => {
        resolve(response.data.data.trip);
      })
      .catch(error => {
        console.log("User Trips", error);
      });
  });

export const getFriendsTripsService = () =>
  new Promise((resolve, reject) => {
    tripAPI
      .get("/getFriendsTrips")
      .then(response => {
        console.log(response.data.data.items.followedTrips)
        resolve(response);
      })
      .catch(error => {
        console.log("Friends Trips", error);
      });
  });

export const addPhotosService = (photos, tripId) =>
  new Promise((resolve, reject) => {
    tripAPI
      .post(`/${tripId}/edit`, { photos })
      .then(response => {
        resolve(response.data.data.trip);
      })
      .catch(error => {
        console.log("Trips", error);
      });
  });

export const loadTripService = tripId =>
  new Promise((resolve, reject) => {
    tripAPI
      .get(`/${tripId}`)
      .then(response => {
        resolve(response.data.data.trip[0]);
      })
      .catch(error => {
        console.log("Trips", error);
      });
  });
