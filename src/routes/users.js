const express = require("express");
const UserController = require("../controller/users");
const router = express.Router();

// Middleware untuk mem-parse body dari permintaan
router.use(express.json());

// CREATE POST
router.post("/", UserController.createNewUser);
// READ GET
router.get("/", UserController.getAllUsers);
// UPDATE - PATCH
router.patch("/:idUser", UserController.updateUser);
// DELETE - DELETE
router.delete("/:idUser", UserController.deleteUser);

module.exports = router;
