const Cart = require("../models/Cart")

// CREATE
const CreateCart = async (req , res) => {
    const newCart = new Cart(req.body)

    try{
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    }catch(err){
        res.status(500).json(err)
    }
}

// UPDATE
const UpdateCart = async (req , res) => {

    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id , {
            $set: req.body // set all data in body to the selected collection by id
        },{
            new:true
        })

        res.status(200).json(updatedCart)
    }catch(err){
        res.status(500).json(err)
    }
}

// DELETE
const DeleteCart = async (req , res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted...")
    }catch(err){
        res.status(500).json(err)
    }
}

// GET USER CART
const GetUserCart = async (req , res) => {
    try{
        const cart = await Cart.findOne({userId: req.params.userId})
        res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err)
    }
}

// GET ALL
const GetAllCarts = async (req , res) => {
    try{
        const carts = await Cart.find()
        res.status(200).json(carts)
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    CreateCart,
    UpdateCart,
    DeleteCart,
    GetUserCart,
    GetAllCarts,
};