const express = require("express");
const app = express();
require("dotenv").config();
const routerUrls = require("./routes/urlRoutes");

const PORT = process.env.PORT || 3000;


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
app.use("/api/v1", routerUrls);
