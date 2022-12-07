const express = require("express");
const dotenv = require("dotenv");
const allRoutes = require("./routes/allRoutes");

const cors = require("cors");
dotenv.config();
require("./database/mongoose");

const app = express();

// const PORT = process.env.PORT || 9000;
const PORT = process.env.PORT || 9000;

// app.use(cors({ origin: true }));
app.use(
  cors({
    origins: [`${process.env.FRONTEND_URL}`],
    methods: ["GET", "POST"],
  })
);

app.get("/", (req, res) => {
  res.send("Buy & Sale");
});

app.use(express.json());
app.use("/api", allRoutes);

app.listen(PORT, () => console.log("Server is Runnig....."));
