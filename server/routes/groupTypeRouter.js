const Router = require('express')
const router = new Router()
const groupTypeController = require('../controllers/groupTypeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN') , groupTypeController.create)
router.get('/', groupTypeController.getAll)
//router.delete('/',)


module.exports = router