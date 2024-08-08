let User = require("../models/user");

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      return users;
    })
    .catch((err) => console.log(err));
};

exports.postUsers = (req, res, next) => {
  let username = req.body.username;
  let phonenumber = req.body.phonenumber;
  let email = req.body.email;
  User.create({
    username: username,
    phonenumber: phonenumber,
    email: email,
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
