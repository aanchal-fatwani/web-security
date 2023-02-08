const axios = require("axios");
let options = {
  headers: {
    "content-type": "application/json; charset=utf-8",
    accept: "*/*",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
  },
};
axios
  .get(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4723392&lng=80.3447932&page_type=DESKTOP_WEB_LISTING", options
  )
  .then(function (response) {
    console.log(JSON.stringify(response?.data));
  })
  .catch(function (error) {
    console.log("Error", error);
  });
