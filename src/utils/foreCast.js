const request = require("request");

const foreCast = (latitude, longitude, callback) => {
  const weatherUrl = `http://api.weatherstack.com/current?access_key=854cdc9f524ba7243cd6f476cbbae44b&query=${latitude},${longitude}`;
  request({ url: weatherUrl, json: true }, (error, response) => {
    if (error) {
      callback(
        "Unable to connect weather application! Please try again later.",
        undefined
      );
    } else if (response.body.error) {
      callback("Unable to find location, Try another search.", undefined);
    } else {
      callback(
        undefined,
        `It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
      );
    }
  });
};

module.exports = foreCast;
