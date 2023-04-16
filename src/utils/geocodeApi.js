export const getGeocodeData = (location, APIkey) => {
  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${APIkey}&language=en&pretty=1`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};
