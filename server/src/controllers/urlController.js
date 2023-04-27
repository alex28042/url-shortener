const UrlServices = require("../services/urlServices");

const getOneUrl = async (req, res) => {
  const url = { url: req.params.url, ...req.user };
  try {
    const oneUrl = await UrlServices.getOneUrl(url);
    res.send({ status: "OK", data: oneUrl });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: error });
  }
};


const createUrl = async (req, res) => {
  const url = { url: req.body.url, ...req.user };
  const regex = /^(http(s)?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/;

  try {
    if (!url.url || !regex.test(url.url)) {
      res.status(400).send({
        status: "FAILED",
        data: { error: "Invalid url" },
      });
    }

    console.log(url);
    const createUrl = await UrlServices.insertUrl(url);

    res.status(201).send({
      status: "OK",
      data: {
        ...createUrl,
        url,
      },
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: "internal error", ...url } });
  }
};

const getAllUrls = async (req, res) => {
  const user = { ...req.user };
  try {
    const allUrls = await UrlServices.getOneUrl(user);
    res.send({ status: "OK", data: allUrls });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: error });
  }
};

module.exports = {
  getAllUrls,
  getOneUrl,
  createUrl,
};
