const Url = require("../database/urlDatabase");
const getOneUrl = async (url) => {
  try {
    const oneUrl = await Url.getOneUrl(url);
    return oneUrl;
  } catch (error) {
    throw error;
  }
};

const insertUrl = async (url) => {
  const urlToInsert = {
    url: url,
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  try {
    const createUrl = await Url.insertUrl(urlToInsert);
    return createUrl;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getOneUrl,
  insertUrl,
};
