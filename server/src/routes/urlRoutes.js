const express = require("express");
const { getOneUrl, createUrl } = require("../controllers/urlController");
const authenticateUser = require("../middlewares/authenticatedEndpoint");

const router = express.Router();

router.get("/:url", authenticateUser, getOneUrl).post("/", authenticateUser, createUrl);

module.exports = router;
