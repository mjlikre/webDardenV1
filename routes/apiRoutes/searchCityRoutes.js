const router = require('express').Router();

const searchController = require('./../../controllers/searchController')
// const authMiddleware = require('./../../middlewares/authMiddlewares');
const passportService = require('./../../services/passport');



router.route('/')
    .post(searchController.searchCity)


module.exports= router;