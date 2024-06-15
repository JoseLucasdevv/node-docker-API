const repository = require("../repositories/UserRepositories");
const _userRepository = new repository();

const listAllUsers = (req, res) => {
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

function updateUser(req, res) {
  try {
    const { results, fields } = _userRepository.update(
      req.params["id"],
      req.body
    );
    res
      .json({
        message: "success Update User",
      })
      .status(201);
  } catch (e) {
    message: "error to Update user";
  }
}

function deleteUser(req, res) {
  try {
    const { results, fields } = _userRepository.delete(req.params["id"]);
    res
      .json({
        message: "success Delete User",
      })
      .status(201);
  } catch (e) {
    message: "error to Delete user";
  }
}

module.exports = {
  listAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
