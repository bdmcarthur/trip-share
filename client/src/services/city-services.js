import axios from "axios";

const cityAPI = axios.create({
  baseURL: `/city`
});

export const addService = ({
  title,
  description,
  imageUrl,
}) =>
  new Promise((resolve, reject) => {
    cityAPI
      .post("/add", {
        title,
        description,
        imageUrl
      })
      .then(response => {
        const city = response.data.data.city;

        resolve(city);
      })
      .catch(error => {
        reject(error);
      });
  });

export const getCitiesService = () =>
  new Promise((resolve, reject) => {
    cityAPI
      .get("/getUserCities")
      .then(response => {
        resolve(response.data.data.city);
      })
      .catch(error => {
        console.log("User Cities", error);
      });
  });

export const getFriendsCitiesService = () =>
  new Promise((resolve, reject) => {
    cityAPI
      .get("/getFriendsCities")
      .then(response => {
        resolve(response.data.data.items.followedCities);
      })
      .catch(error => {
        console.log("Friends Cities", error);
      });
  });

export const addPhotosService = (photos, cityId) =>
  new Promise((resolve, reject) => {
    cityAPI
      .post(`/${cityId}/edit`, { photos })
      .then(response => {
        resolve(response.data.data.city);
      })
      .catch(error => {
        console.log("Cities", error);
      });
  });

export const loadCityService = cityId =>
  new Promise((resolve, reject) => {
    cityAPI
      .get(`/${cityId}`)
      .then(response => {
        resolve(response.data.data.city[0]);
      })
      .catch(error => {
        console.log("Cities", error);
      });
  });


