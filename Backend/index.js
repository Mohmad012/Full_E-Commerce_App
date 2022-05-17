const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
dotenv.config()

const app = express()

const ConnectDB = process.env.MONGO_CONNECTION
const PORT = process.env.PORT || 9000

mongoose.connect(ConnectDB)
    .then(() => console.log("ConnectDB Successfull!"))
    .catch(err => console.log(err))

app.use(express.json())
app.use("/api/users" , userRoute)
app.use("/api/products" , productRoute)
app.use("/api/carts" , cartRoute)
app.use("/api/auth" , authRoute)

app.listen(PORT , () => console.log("Server is Runnig....."))

