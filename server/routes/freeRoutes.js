const express = require("express");
const router = express.Router();

const registerUser = require("../controllers/registerControllers");
const loginUser = require("../controllers/loginControllers");
const findUser = require("../controllers/findUser");
const getUsers = require("../controllers/getUsers");
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find/:userId", findUser);
router.get("/users", getUsers);
module.exports = router;
