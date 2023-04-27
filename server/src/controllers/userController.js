const UserService = require("../services/userServices");

const getUserById = async (req, res) => {
  const user = req.user.insertedId;

  try {
    if (!user) {
      res.status(400).send({
        status: "FAILED",
        data: { error: "Error User" },
      });
    }

    const userGetId = await UserService.getUserById(user);

    res.status(201).send({
      status: "OK",
      data: {
        ...userGetId,
      },
    });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: error });
  }
};

module.exports = {
  getUserById,
};
