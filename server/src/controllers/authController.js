
const login = async (req, res) => {

  try {
    res.send({ status: "OK", data: oneUrl });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: error });
  }
};

const register = async (req, res) => {

  try {
 

    res.status(201).send({
      status: "OK",
      data: {
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
