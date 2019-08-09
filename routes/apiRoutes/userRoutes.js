const router = require('express').Router();
const userController = require('./../../controllers/userController');
const passportService = require('./../../services/passport');
const authMiddleware = require('./../../middlewares/authMiddlewares');

// /api/todo

router.route('/')
  .get(authMiddleware.requireAuth, userController.getUser)
  // .post(authMiddleware.requireAuth, todoController.createTodo)


module.exports = router;