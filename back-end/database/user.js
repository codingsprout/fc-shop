const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userDB = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 4,
      max: 20,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
      min: 4,
      max: 20,
    },

    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    hash_password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    race: {
      type: String,
    },

    world: {
      type: String,
    },

    gender: {
      type: String,
    },

    profilePicture: {
      type: String,
    },
  },

  { timestamps: true }
);

userDB.virtual("password").set(function (password) {
  this.hash_password = bcrypt.hashSync(password, 7);
});

userDB.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

userDB.methods = {
  authenticate: function (password) {
    return bcrypt.compareSync(password, this.hash_password);
  },
};

module.exports = mongoose.model("User", userDB);