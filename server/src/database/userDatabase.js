const { ObjectId } = require("mongodb");
const client = require("../mongodb");

const getUserById = async (user) => {
  try {
    const getUser = await client
      .db("Url")
      .collection("users")
      .findOne({ _id: new ObjectId(user) });

    if (!getUser) {
      throw { status: 400, message: "Cant find User" };
    }

    return getUser;
  } catch (error) {
    throw { status: error?.status, message: error };
  }
};

module.exports = {
  getUserById,
};
