const mongoose = require("mongoose");
const ConnectDB = process.env.MONGO_CONNECTION

mongoose.connect(ConnectDB)
    .then(() => console.log("Database Connected successfully"))
    .catch(err => console.log("Connection to database Failed ", err))