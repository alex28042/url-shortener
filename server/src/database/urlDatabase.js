const client = require("../mongodb");

const getOneUrl = async (url) => {
  try {
    console.log(url);
    const urlDatabase = await client
      .db("Url")
      .collection("urls")
      .findOne({ urlShortened: url.url, userId: url.insertedId });

    if (!urlDatabase) throw { status: 400, message: "Cant find Url" };

    return urlDatabase;
  } catch (error) {
    throw { status: error?.status, message: error };
  }
};

const getAllUrls = async (user) => {
  try {
    console.log(user);
    const urlsDatabase = await client
      .db("Url")
      .collection("urls")
      .find({ userId: user.insertedId })
      .toArray();
    console.log(urlsDatabase);

    if (!urlsDatabase) throw { status: 400, message: "Cant find Urls" };

    return urlsDatabase;
  } catch (error) {
    throw { status: error?.status, message: error };
  }
};


const insertUrl = async (url) => {
  const alpheBeth =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  try {
    let urlShorted = "";

    console.log(url);
    const urlDatabase = await client
      .db("Url")
      .collection("urls")
      .findOne({ url: url.url, userId: url.userId });

    if (urlDatabase) throw { status: 400, message: "Already added" };

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * alpheBeth.length);
      urlShorted += alpheBeth[randomIndex];
    }

    const urlInserted = await client
      .db("Url")
      .collection("urls")
      .insertOne({ ...url, urlShortened: urlShorted });

    return { ...urlInserted, urlShorted };
  } catch (error) {
    throw {
      status: 500,
      message: error?.message,
    };
  }
};

module.exports = {
  getAllUrls,
  getOneUrl,
  insertUrl,
};
