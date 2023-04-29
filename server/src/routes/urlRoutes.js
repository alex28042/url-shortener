const express = require("express");
const {
  getOneUrl,
  createUrl,
  getAllUrls,
} = require("../controllers/urlController");
const authenticateUser = require("../middlewares/authenticatedEndpoint");

const router = express.Router();

router
  .get("/url/:url", authenticateUser, getOneUrl)
  .post("/", authenticateUser, createUrl)
  .get("/all", authenticateUser, getAllUrls);

module.exports = router;
