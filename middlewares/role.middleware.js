exports.isAdmin = (req, res, next) => {
  if (req.user.role !== "Admin") {
    return res.status(403).json({
      success: false,
      message: "Access Denied. Admin only.",
    });
  }

  next();
};

exports.isStudent = (req, res, next) => {
  if (req.user.role !== "Student") {
    return res.status(403).json({
      success: false,
      message: "Access Denied. Student only.",
    });
  }

  next();
};

exports.isVisitor = (req, res, next) => {
  if (req.user.role !== "Visitor") {
    return res.status(403).json({
      success: false,
      message: "Access Denied. Visitor only.",
    });
  }

  next();
};