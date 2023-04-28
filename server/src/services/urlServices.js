const Url = require("../database/urlDatabase");
const urlParser  = require("../shared/urlValidator");

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
    url: urlParser(url.url),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    userId: url.insertedId
  };

  try {
    const createUrl = await Url.insertUrl(urlToInsert);
    return createUrl;
  } catch (error) {
    throw error;
  }
};

const getAllUrls = async (user) => {
  try {
    const allUrls = await Url.getAllUrls(user);
    return allUrls;
  } catch (error) {
    throw error;
  }
};


module.exports = {
  getAllUrls,
  getOneUrl,
  insertUrl,
};
