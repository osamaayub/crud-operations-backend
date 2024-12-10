const User = require("../models/user.Model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");



//register User

const registerUser = async (req, res) => {
  try {
     const {name,email,password}=req.body;
     //hashPassword
     const hashPassword = await bcrypt.hash(password,10);
     const user=await User.create({
      name,
      email,
      password:hashPassword
     });
     //create a Token
     const token=jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{
       expiresIn: process.env.JWT_EXPIRES_IN 
     });
     res.status(201).json({
      message:"User created",
      user,
      token
     })
  } catch (error) {
    res.status(500).json({
      message:error.message || "Internal Server Error"
    })
  }
}


//login User   
const loginUser = async (req, res) => {
  const { email, password } = req.body;


  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not Found' });
    }
    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid  password.' });
    }

    // Generate token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
};

module.exports = { loginUser,registerUser};


