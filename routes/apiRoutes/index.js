const router      = require('express').Router();
const authRoutes  = require('./authRoutes');
const todoRoutes =  require('./todoRoutes');
const userRoutes = require('./userRoutes')
const searchCityRoutes = require('./searchCityRoutes');
const matchRoutes = require('./matchRoutes');

const passportService = require('./../../services/passport');

const authMiddleware = require('./../../middlewares/authMiddlewares');
// / api prepended to these routes

router.route('/test')
  .get(authMiddleware.requireAuth, (req, res) => {
    res.send(req.user);
  });

router.use('/auth', authRoutes);
router.use('/todo', todoRoutes);
router.use('/user', userRoutes );
router.use('/search', searchCityRoutes);
router.use('/match', matchRoutes)

module.exports = router;