const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  role: { type: String, required: true },
  first_name: { type: String, required: true, ref :'first_name'},
  last_name: { type: String, required: true },
  email: { type: String, required: true, ref: 'email' },
  password: { type: String, required: true, select: false, ref: 'password' },
  
});
UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(5);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

UserSchema.methods.validPassword = async (candidatePassword, oldPwd) => {
  const result = await bcrypt.compare(candidatePassword, oldPwd);
  return result;
};

module.exports = mongoose.model("user", UserSchema);
