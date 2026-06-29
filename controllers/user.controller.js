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
