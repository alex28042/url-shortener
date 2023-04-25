const AuthService = require("../services/authServices");

const login = async (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    if (!user || !user.email || !user.password) {
      res.status(400).send({
        status: "FAILED",
        data: { error: "Pass correctly the email and password" },
      });
    }

    const loginUser = await AuthService.login(user);

    res.status(201).send({
      status: "OK",
      data: {
        ...loginUser,
      },
    });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: error });
  }
};

const register = async (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    if (!user || !user.email || !user.password) {
      res.status(400).send({
        status: "FAILED",
        data: { error: "Invalid user" },
      });
    }

    const registerUser = await AuthService.register(user);

    res.status(201).send({
      status: "OK",
      data: {
        ...registerUser,
      },
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error } });
  }
};

module.exports = {
  login,
  register,
};
