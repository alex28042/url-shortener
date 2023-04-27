const urlService = require("../services/urlServices");

const getOneUrl = async (req, res) => {
  const url = req.params.url;

  try {
    const oneUrl = await urlService.getOneUrl(url);
    res.send({ status: "OK", data: oneUrl });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: error });
  }
};

const createUrl = async (req, res) => {
  const url =  { ...req.body.url, ...req.user }; 
  const regex = /^(http(s)?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/;

  try {
    if (!url || !regex.test(url) || url == null) {
      res.status(400).send({
        status: "FAILED",
        data: { error: "Invalid url" },
      });
    }

    const createUrl = await urlService.insertUrl(url);

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
      .send({ status: "FAILED", data: { error: error } });
  }
};

module.exports = {
  getOneUrl,
  createUrl,
};
