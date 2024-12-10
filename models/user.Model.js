const mongoose = require("mongoose");
const bcrypt=require("bcryptjs");

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase:true
  },
  password: {
    type: String,
    required: true,
    min: 1,
    max: 6

  }
});

userSchema.pre("save", async() => {
  if (this.modified("password")) {
     this.password=await bcrypt.hash(password,10);
  }
});


const user = mongoose.model("User", userSchema);
module.exports = user;