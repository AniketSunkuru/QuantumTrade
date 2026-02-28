const router = require("express").Router();
const User = require("./model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered"
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });

    const savedUser = await newUser.save();

    // ✅ Generate token immediately after signup
    const accessToken = jwt.sign(
      { id: savedUser._id },
      process.env.JWT_SECRET
    );

    res.status(201).json({ accessToken });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    // ✅ If user not found
    if (!user) {
      return res.status(404).json({
        message: "Email not registered. Please sign up first."
      });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(400).json({
        message: "Incorrect password"
      });
    }

    const accessToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    res.status(200).json({ accessToken });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;