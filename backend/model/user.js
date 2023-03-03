const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    Status: {
      type:Boolean,
      defaultValue: false
  },
  ValidateToken: {
    type: String
},
  role: {
      type: String,
      required: true,
      enum: ['client', 'admin'],
      default: 'client',
    },
  }, { timestamps: true });

module.exports=mongoose.model("User",UserSchema)
