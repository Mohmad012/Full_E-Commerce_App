const express = require("express");
const dotenv = require("dotenv")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")
const cors = require("cors")
dotenv.config()
require('./database/mongoose')

const app = express()

const PORT = process.env.PORT || 9000



app.use(cors({ origin: true }));
app.use(express.json())
app.use("/api/users" , userRoute)
app.use("/api/products" , productRoute)
app.use("/api/carts" , cartRoute)
app.use("/api/orders" , orderRoute)
app.use("/api/auth" , authRoute)
app.use("/api/checkout" , stripeRoute)

app.listen(PORT , () => console.log("Server is Runnig....."))

