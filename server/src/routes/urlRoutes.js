const express = require("express");
const { getOneUrl, createUrl } = require("../controllers/urlController");

const router = express.Router();

router.get("/:url", getOneUrl).post("/", createUrl);

module.exports = router;
