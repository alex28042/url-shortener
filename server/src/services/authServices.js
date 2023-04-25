const AuthDatabase = require("../database/authDatabase");
const login = async (user) => {
  try {
    const userLogin = await AuthDatabase.login(user);
    return userLogin;
  } catch (error) {
    throw error;
  }
};

const register = async (user) => {
  try {
    const userRegister = await AuthDatabase.register(user);
    return userRegister;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  login,
  register,
};
