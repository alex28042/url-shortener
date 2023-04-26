const express = require("express");
const { getOneUrl, createUrl } = require("../controllers/urlController");
const authenticateUser = require("../shared/authenticatedEndpoint");

const router = express.Router();

router.get("/:url", authenticateUser, getOneUrl).post("/", authenticateUser, createUrl);

module.exports = router;
