const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
require("dotenv").config();
const routerUrls = require("./routes/urlRoutes");
const routerUsers = require("./routes/userRoutes");
const routerAuth = require("./routes/authRoutes");
const PORT = process.env.PORT || 3000;



app.use(cookieParser());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.listen(PORT, () => {
  console.log(`Listening from port: ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/urls", routerUrls);
app.use("/api/v1/auth", routerAuth);
app.use("/api/v1/users", routerUsers);
