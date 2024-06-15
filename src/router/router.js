const { Router } = require("express");
const {
  createNewUser,
  listAllUsers,
  updateUser,
} = require("../controllers/userController");

const router = Router();

router.get("/list", listAllUsers);

router.post("/create", createNewUser);

router.put("/update/:id", updateUser);


module.exports = router;
