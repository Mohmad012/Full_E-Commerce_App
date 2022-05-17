const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username:{type: String , required:true , unique:true },
        email:{type: String , required:true , unique:true },
        password:{type: String , required:true},
        isAdmin:{type: Boolean , default:false}
    },
    {
        timestamps:true // to add time for each user is created
    }
)

module.exports = mongoose.model("User" , UserSchema)