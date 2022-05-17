const router = require("express").Router()
const Order = require("../models/Order")
const {verifyTokenAndAdmin , verifyTokenAndAuthorization , verifyToken} = require("./verifyToken")

// CREATE
router.post("/" , verifyToken , async (req , res) => {
    const newOrder = new Order(req.body)

    try{
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    }catch(err){
        res.status(500).json(err)
    }
})


// UPDATE
router.put("/:id" , verifyTokenAndAdmin , async (req , res) => {

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
})


// DELETE
router.delete("/:id" , verifyTokenAndAdmin , async (req , res) => {
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted...")
    }catch(err){
        res.status(500).json(err)
    }
})

// GET USER ORDERS
router.get("/find/:userId" , verifyTokenAndAuthorization , async (req , res) => {
    try{
        const orders = await Order.find({userId: req.params.userId})
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
})

// GET ALL
router.get("/" , verifyTokenAndAdmin , async (req , res) => {
    try{
        const orders = await Order.find()
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
})

// GET STATS
// router.get("/income" , verifyTokenAndAdmin , async (req , res) => {
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
//     try{
//         const data = await User.aggregate([
//             {
//                 $match:{createdAt:{$gte: lastYear}} // match all users and get all users that greater that last year
//             },
//             {
//                 $project:{
//                     month:{$month:"$createdAt"} // get month for all users and set each of them in month variable
//                 }
//             },
//             {
//                 $group:{ // make all data that will apper in group like the following: 
//                     _id:"$month",
//                     total:{ $sum: 1 }
//                 }
//             }
//         ]);
        
//         res.status(200).json(data)
//     }catch(err){
//         res.status(500).json(err)
//     }
// })

module.exports = router;