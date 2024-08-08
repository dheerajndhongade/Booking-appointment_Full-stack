let express = require("express");

let router = express.Router();

let getUsersController = require("../controllers/user");

router.get("/appointments", getUsersController.getUsers);

router.post("/appointments", getUsersController.postUsers);

module.exports = router;
