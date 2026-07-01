exports.profile = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      user: req.user,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: "Internal server Error",
    });
  }
};

exports.adminDashboard = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Welcome Admin",
      user: req.user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


exports.studentDashboard = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Welcome Student",
      user: req.user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.visitorDashboard = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Welcome Visitor",
      user: req.user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};