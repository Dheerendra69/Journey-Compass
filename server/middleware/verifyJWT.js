const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  // console.log(req.headers.authorization);
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith("Token ")) {
    console.log(401);
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "Forbidden" });
    }
    req.loggedin = true;
    req.userId = decoded.user.id;
    req.userEmail = decoded.user.email;
    req.userHashedPass = decoded.user.password;
    next();
  });
};

module.exports = verifyJWT;
