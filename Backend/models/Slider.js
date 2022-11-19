const mongoose = require("mongoose");

const SliderSchema = new mongoose.Schema(
    {
        img: { type: String, required: true,unique: true },
    },
    {
        timestamps: true, // to add time for each Slider is created
    }
)

module.exports = mongoose.model("Slider" , SliderSchema)