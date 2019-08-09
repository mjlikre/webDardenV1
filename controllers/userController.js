const db = require('./../models');

module.exports = {
  getUser: async (req, res) => {
    console.log('hey')
    try {
      const user = await db.User.findById(req.user._id)

      res.json({ user });
    } catch(e) {
      res.json(e);
    }
  }
}