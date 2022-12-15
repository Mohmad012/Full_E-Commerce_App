const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register
const Register = async (req, res) => {

  try {
    const user = await User.findOne({ username: req.body.username });
    const userEmail = await User.findOne({ email: req.body.email });

    if (user || userEmail) {
      return res.status(401).json({message:"Opss_You_Can_Not_Register_With_This_Username_Or_Email_It_Is_Taken_key"});
    }
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
}

// Login
const Login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).json("Opss, User Not Found !!");
    }

    const hashPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const OriginalPassword = hashPassword.toString(CryptoJS.enc.Utf8);

    if (OriginalPassword !== req.body.password) {
      return res.status(401).json("Opss, password is not correct !!");
    }

    const { password, ...others } = user._doc;
    // console.log("user._doc" , user._doc)
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  Register,
  Login
};
