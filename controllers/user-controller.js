const { User } = require("../models");

const userController = {
  getAllUsers: (req, res) => {
    User.find({})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log("!getAllUsers");
        res.status(400).json(err);
      });
  },
  getSingleUser: (params, res) => {
    User.findOne({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log("!getSingleUser");
        res.status(400).json(err);
      });
  },
  createUser: ({ body }, res) => {
    User.create(body)
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log("!createUser");
        res.status(400).json(err);
      });
  },
  updateUser: (params, res) => {
    User.findOneAndUpdate({ _id: params.id }, params.body, { new: true })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log("!updateUser");
        res.status(400).json(err);
      });
  },
  deleteUser: ({ params }, res) => {
    User.findONeAndDelete({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log("!deleteUser");
        res.status(400).json(err);
      });
  },
  addFriend: (req, res) => {},
  removeFriend: (req, res) => {},
};

module.exports = userController;
