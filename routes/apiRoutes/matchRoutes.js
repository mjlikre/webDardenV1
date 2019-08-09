const router  =require ('express').Router();
const matchController = require('./../../controllers/matchController');
const passportService = require('./../../services/passport');
const authMiddleware = require('./../../middlewares/authMiddlewares');

router.route('/')
    .post(matchController.getMatch)

module.exports = router