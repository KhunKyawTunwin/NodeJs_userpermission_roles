const { Schema, default: mongoose } = require("mongoose");
console.log(mongoose);

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    default: ["Employee"],
  },
  active: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Users", userSchema);
