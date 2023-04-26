const jwt = require("./jwt")

const authenticateUser = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return res.status(401).send({
      status: "FAILED",
      data: {
        message: "No Access",
      },
    });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err)
      return res.status(403).send({
        status: "FAILED",
        data: {
          message: "No Access 1",
        },
      });

    req.user = user;
    next();
  });
};

module.exports = authenticateUser