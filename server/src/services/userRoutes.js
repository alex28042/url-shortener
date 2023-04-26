const UserDatabase = require("../database/userDatabase");

const getUserById = async (user) => {
  try {
    const getUser = await UserDatabase.g(user);
    return getUser;
  } catch (error) {
    throw error;
  }
};


module.exports = {
  getUserById,
};
