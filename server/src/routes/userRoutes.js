const express = require("express");
const authenticateUser = require("../middlewares/authenticatedEndpoint");
const { getUserById } = require("../controllers/userController");

const router = express.Router();

router.get("/", authenticateUser, getUserById);

module.exports = router;
