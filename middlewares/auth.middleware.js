const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    // read token
    const token = req.cookies.token;
    // check token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login first",
      });
    }

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // attach user to request
    req.user = decoded;
    console.log(req.user.id);
    console.log(req.user.role);
    // move to next middlewares/controllers
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
