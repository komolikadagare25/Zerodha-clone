const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  console.log("=== AUTH MIDDLEWARE ===");
  console.log(req.headers.authorization);

  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      id: decoded.id,
    };

    console.log("Authenticated User:", req.user);

    next();
  } catch (err) {
    console.log("AUTH ERROR:", err);
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

module.exports = authMiddleware;