const Router = require('express')
const router = new Router()
const childController = require('../controllers/childController')
const authMidlleware = require('../middleware/authMiddleware')

router.get('/:id', authMidlleware, childController.getUserChildren);
router.post('/:id', authMidlleware, childController.addChildToUser);


module.exports = router