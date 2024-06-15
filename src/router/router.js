const { Router } = require("express");
const {
  createNewUser,
  listAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = Router();

router.get("/list", listAllUsers);

router.post("/create", createNewUser);

router.put("/update/:id", updateUser);

router.delete("/delete/:id", deleteUser);

module.exports = router;
