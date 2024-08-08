let express = require("express");

let router = express.Router();

let getUsersController = require("../controllers/user");

router.get("/appointments", getUsersController.getUsers);

router.post("/appointments", getUsersController.postUsers);

router.get("/appointments/:id", getUsersController.getUserById);

router.delete("/appointments/:id", getUsersController.postDelete);

router.put("/appointments/:id", getUsersController.postEdit);

module.exports = router;
