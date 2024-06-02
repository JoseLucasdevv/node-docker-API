const { Router } = require("express");
const {
  createNewUser,
  listAllUsers,
} = require("../controllers/userController");

const router = Router();

router.get("/list", listAllUsers);

router.post("/create", createNewUser);

module.exports = router;
