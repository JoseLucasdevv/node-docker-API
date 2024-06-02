const { json } = require("express");
const repository = require("../repositories/UserRepositories");

const listAllUsers = (req, res) => {
  const _userRepository = new repository();

  _userRepository.list((err, users) => {
    if (err) {
      return res.status(500).json({
        message: "error",
      });
    }

    res.status(200).json({
      users,
    });
  });
};

function createNewUser(req, res) {
  const _userRepository = new repository();
  try {
    const { results, fields } = _userRepository.create(req.body);
    res
      .json({
        message: "success create User",
      })
      .status(201);
  } catch (e) {
    message: "error to create user";
  }
}

module.exports = {
  listAllUsers,
  createNewUser,
};
