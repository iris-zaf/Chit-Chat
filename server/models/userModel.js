const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, unique: [true, "Name Exists"] },
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
  photoURL: { type: String, default: "" },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
