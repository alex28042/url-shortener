const Url = require("../database/urlDatabase");
const { UrlValidator } = require("../shared/urlValidator");
const getOneUrl = async (url) => {
  try {
    const oneUrl = await Url.getOneUrl(url);
    return oneUrl;
  } catch (error) {
    throw error;
  }
};

const insertUrl = async (url) => {
  const urlParser = new UrlValidator()

  const urlToInsert = {
    url: urlParser.urlParser(url.url),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    userId: user.id
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
