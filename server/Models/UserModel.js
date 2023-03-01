
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    first_Name: {
        type:String,
    },
    last_Name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    phone_number: {
        type: String
    },
    city: {
        type: String
    },
    adresse: {
        type: String
    },
    ValidateToken: {
        type: String
    },
    Status: {
        type:Boolean,
        defaultValue: false
    },
    role: {
        type: String,
        required: true,
        enum: ['client', 'admin'],
        default: 'client',
      },
    }, { timestamps: true });

module.exports=mongoose.model("User",UserSchema)
