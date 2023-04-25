const client = require("../mongodb");

const login = async (user) => {
  try {
    const userLogin = await client
      .db("Url")
      .collection("users")
      .findOne({ email: user.email, password: user.password });

    if (!userLogin) {
      throw { status: 400, message: "Cant find User" };
    }

    return userLogin;
  } catch (error) {
    throw { status: error?.status, message: error };
  }
};

const register = async (user) => {
  try {
    const userRegister = await client
      .db("Url")
      .collection("users")
      .findOne({ email: user.email });

    if (userRegister) {
      throw { status: 400, message: "Already added" };
    }

    const userInserted = await client
      .db("Url")
      .collection("users")
      .insertOne({ ...user });

    return userInserted;
  } catch (error) {
    throw {
      status: 500,
      message: error?.message,
    };
  }
};

module.exports = {
  login,
  register,
};
