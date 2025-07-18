const User = require("../models/User");
const bcrypt = require("bcrypt");
const Article = require("../models/Article");
const jwt = require("jsonwebtoken");

const getCurrentUser = async (req, res) => {
  const email = req.userEmail;

  const user = await User.findOne({ email }).exec();

  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  }
  return res.status(200).json({ user: user.toUserResponse() });
};

const userLogin = async (req, res) => {
  const { user } = req.body;

  // check if the data exists
  if (!user || !user.email || !user.password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //since email is unique query and find out that user

  const loginUser = await User.findOne({ email: user.email }).exec();

  if (!loginUser) {
    return res.status(404).json({ message: "User Not Found" });
  }

  //if the password matches

  const match = await bcrypt.compare(user.password, loginUser.password);

  if (!match)
    return res.status(401).json({ message: "Unauthorized: Wrong password" });

  return res.status(200).json({
    user: loginUser.toUserResponse(),
  });
};

const registerUser = async (req, res) => {
  //logic to register the user

  const { user } = req.body;

  // check if the data exists
  if (!user || !user.email || !user.password || !user.username) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPass = await bcrypt.hash(user.password, 10); //10 => salt rounds

  const userObject = {
    username: user.username,
    password: hashedPass,
    email: user.email,
  };

  const createdUser = await User.create(userObject);

  //save to the database
  //create model or schema
  if (createdUser) {
    res.status(201).json({
      user: createdUser.toUserResponse(),
    });
  } else {
    res.status(422).json({
      errors: {
        body: "Unable to register a user",
      },
    });
  }
};

const updateUser = async (req, res) => {
  const { user } = req.body;

  if (!user) {
    return res.status(400).json({ message: "Required a User object" });
  }

  const email = req.userEmail;

  const target = await User.findOne({ email }).exec();

  if (user.email) {
    target.email = user.email;
  }

  if (user.username) {
    target.username = user.username;
  }

  if (user.password) {
    const hashedPass = await bcrypt.hash(user.password, 10);
    target.password = hashedPass;
  }

  if (typeof user.image !== "undefined") {
    target.image = user.image;
  }

  if (typeof user.bio !== "undefined") {
    target.bio = user.bio;
  }

  await target.save();
  return res.status(200).json({
    user: target.toUserResponse(),
  });
};

const profileController = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Token ")) {
    return res.status(401).json({ message: "No token provided" });
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded.id).select("username email");

    if (!user) return res.status(404).json({ message: "User not found" });

    // Get articles written by user (optional)
    const articles = await Article.find({ author: user.username }).select(
      "title slug"
    );

    res.json({ user, articles });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = {
  registerUser,
  userLogin,
  getCurrentUser,
  updateUser,
  profileController,
};
