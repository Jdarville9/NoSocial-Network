const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    thoughts: [],
    friends: [],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// UserSchema.virtual("thoughtsCount").get(function () {
//   return this.thoughts.length;
// });

UserSchema.virtual("friendsCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
