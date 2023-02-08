const axios = require("axios");
let options = {
  headers: {
    "content-type": "application/json; charset=utf-8",
    "Accept-Language": "fr",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
  },
};

axios
  .get("https://www.linkedin.com", options)
  .then(function (response) {
    const getTitle = response?.data.match(/<title>(.*?)<\/title>/g);
    console.log(getTitle);
  })
  .catch(function (error) {
    console.log("Error", error);
  });
