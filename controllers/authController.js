const db      = require('./../models');
const jwt     = require('jwt-simple');
const config  = require('./../config');

const tokenForUser = function(user) {
  const timestamp = new Date().getTime();
  // Sub === subject
  // iat === issued at time

  // Its going to encode the whole 1st object and then add our secret to it
  return jwt.encode({ sub: user.id, iat: timestamp}, config.secret);
};



module.exports = {
  userSignup: async (req, res) => {
    console.log(req)
    const { userName, email, password, age, activities, city, aboutMe, photoLink, userType } = req.body;

    if(!email || !password) {
      return res.status(422).json({ error: 'You must provide an email and password' });
    }
    try {
      // Check if theres existing user
      const existingUser = await db.User.findOne({ email });
      // if user exist, throw error
      if(existingUser) {
        return res.status(422).json({ error: 'Email is in use' });
      }
      const user = new db.User({ userName, email, password, age, yearsOfExperience, activities, city, aboutMe, photoLink, userType });
      await user.save();
      res.json({ token: tokenForUser(user)});
    } catch(e) {
      res.status(404).json({ e });
    }
  },
  signUp: async (req, res) => {
    console.log(req)
    const { userName, lat, lng, email, password, age, yearsOfExperience, activities, city, aboutMe, photoLink, userType } = req.body;

    if(!email || !password) {
      return res.status(422).json({ error: 'You must provide an email and password' });
    }
    try {
      // Check if theres existing user
      const existingUser = await db.User.findOne({ email });
      // if user exist, throw error
      if(existingUser) {
        return res.status(422).json({ error: 'Email is in use' });
      }
      const user = new db.User({ userName, lat, lng, email, password, age, yearsOfExperience, activities, city, aboutMe, photoLink, userType });
      await user.save();
      res.json({ token: tokenForUser(user)});
    } catch(e) {
      res.status(404).json({ e });
    }
  },
  signIn: (req, res) => {
    res.send({ token: tokenForUser(req.user)});
  }

};
