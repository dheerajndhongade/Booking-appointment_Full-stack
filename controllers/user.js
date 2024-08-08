let User = require("../models/user");

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => console.log(err));
};

exports.postUsers = (req, res, next) => {
  let username = req.body.username;
  let phone = req.body.phone;
  let email = req.body.email;
  console.log(req.body);
  User.create({
    username: username,
    phone: phone,
    email: email,
  })
    .then((result) => {
      res.redirect("/appointments");
      console.log("created table");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUserById = (req, res, next) => {
  let id = req.params.id;
  User.findByPk(id)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => console.log(err));
};

exports.postDelete = (req, res, next) => {
  let id = req.params.id;
  console.log(req.params);
  User.findByPk(id)
    .then((delUser) => {
      return delUser.destroy();
    })
    .then((result) => {
      console.log("destroyed");
      res.redirect("/appointments");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEdit = (req, res, next) => {
  let id = req.params.id;
  let updatedUsername = req.body.username;
  let updatedNumber = req.body.phone;
  let updatedEmail = req.body.email;
  User.findByPk(id)
    .then((editUser) => {
      console.log(editUser);
      (editUser.username = updatedUsername), (editUser.phone = updatedNumber);
      editUser.email = updatedEmail;
      return editUser.save();
    })
    .then((result) => {
      console.log("Updated ;)");
      res.redirect("/appointments");
    })
    .catch((err) => console.log(err));
};
