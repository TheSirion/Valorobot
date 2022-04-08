const axios = require("axios");

const valorantApi = "https://valorant-api.com/v1/";

exports.getPlayerCardByUuid = function (uuid) {
  return axios
    .get(`${valorantApi}playercards/${uuid}`)
    .then(response => response.json())
    .then(response => response.data);
};
