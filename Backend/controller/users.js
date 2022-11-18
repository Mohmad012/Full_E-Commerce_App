const router = require("express").Router()
const CryptoJS = require("crypto-js");
const User = require("../models/User")
const {verifyTokenAndAdmin , verifyTokenAndAuthorization} = require("./verifyToken")

// UPDATE
const UpdateUser = async (req , res) => {
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    }

    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id , {
            $set: req.body // set all data in body to the selected collection by id
        },{
            new:true
        })

        res.status(200).json(updatedUser)
    }catch(err){
        res.status(500).json(err)
    }
}

// DELETE
const DeleteUser = async (req , res) => {
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted...")
    }catch(err){
        res.status(500).json(err)
    }
}

// GET
const GetUser = async (req , res) => {
    try{
        const user = await User.findById(req.params.id)
        const {password , ...others} = user._doc;
        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
}

// GET ALL
const GetAllUsers = async (req , res) => {
    const query = req.query.new;
    try{
        const users = query ? await User.find().sort({_id:-1}).limit(1) : await User.find() // sorting from down to up
        res.status(200).json(users)
    }catch(err){
        res.status(500).json(err)
    }
}

// GET STATS
const GetStatsOfUser = async (req , res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
    try{
        const data = await User.aggregate([
            {
                $match:{createdAt:{$gte: lastYear}} // match all users and get all users that greater that last year
            },
            {
                $project:{
                    month:{$month:"$createdAt"} // get month for all users and set each of them in month variable
                }
            },
            {
                $group:{ // make all data that will apper in group like the following: 
                    _id:"$month",
                    total:{ $sum: 1 }
                }
            }
        ]);
        
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    UpdateUser,
    DeleteUser,
    GetUser,
    GetAllUsers,
    GetStatsOfUser
}