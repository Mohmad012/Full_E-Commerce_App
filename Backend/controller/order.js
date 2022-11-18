const Order = require("../models/Order")

// CREATE
const CreateOrder = async (req , res) => {
    const newOrder = new Order(req.body)

    try{
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    }catch(err){
        res.status(500).json(err)
    }
}

// UPDATE
const UpdateOrder = async (req , res) => {

    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id , {
            $set: req.body // set all data in body to the selected collection by id
        },{
            new:true
        })

        res.status(200).json(updatedOrder)
    }catch(err){
        res.status(500).json(err)
    }
}

// DELETE
const DeleteOrder = async (req , res) => {
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted...")
    }catch(err){
        res.status(500).json(err)
    }
}

// GET USER ORDERS
const GetUserOrders = async (req , res) => {
    try{
        const orders = await Order.find({userId: req.params.userId})
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
}

// GET ALL
const GetAllOrders = async (req , res) => {
    try{
        const orders = await Order.find()
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
}

// GET MONTHLY INCOME
const GetMonthlyIncome = async (req , res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1)) // get month now
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1)) // get month now - 1 (5 - 1 = 4)

    try{
        const income = await Order.aggregate([
            {
                $match:{createdAt:{$gte: previousMonth}} // match all users and get all users that greater that last year
            },
            {
                $project:{
                    month:{$month:"$createdAt"}, // get month for all users and set each of them in month variable
                    sales:"$amount"
                }
            },
            {
                $group:{ // make all data that will apper in group like the following: 
                    _id:"$month",
                    total:{ $sum: "$sales" }
                }
            }
        ]);
        
        res.status(200).json(income)
    }catch(err){
        res.status(500).json(err)
    }
}


module.exports = {
    CreateOrder,
    UpdateOrder,
    DeleteOrder,
    GetUserOrders,
    GetAllOrders,
    GetMonthlyIncome
};