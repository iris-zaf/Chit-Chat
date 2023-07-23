const User = require("../models/userModel");

const findUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = findUser;
