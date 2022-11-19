const Slider = require("../models/Slider")

// CREATE
const CreateSlider = async (req , res) => {
    const newSlider = new Slider(req.body)

    try{
        const savedSlider = await newSlider.save()
        res.status(200).json(savedSlider)
    }catch(err){
        res.status(500).json(err)
    }
}

// UPDATE
const UpdateSlider = async (req , res) => {

    try{
        const updatedSlider = await Slider.findByIdAndUpdate(req.params.id , {
            $set: req.body // set all data in body to the selected collection by id
        },{
            new:true
        })

        res.status(200).json(updatedSlider)
    }catch(err){
        res.status(500).json(err)
    }
}

// DELETE
const DeleteSlider = async (req , res) => {
    try{
        await Slider.findByIdAndDelete(req.params.id)
        res.status(200).json("Slider has been deleted...")
    }catch(err){
        res.status(500).json(err)
    }
}

// GET ALL
const GetAllSliders = async (req , res) => {
    try{
        const Sliders = await Slider.distinct("img")
        res.status(200).json(Sliders)
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    CreateSlider,
    UpdateSlider,
    DeleteSlider,
    GetAllSliders,
};