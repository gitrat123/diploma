const Router = require('express')
const router = new Router()
const scheduleController = require('../controllers/scheduleController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), scheduleController.create)
router.get('/', scheduleController.getAll)
//router.delete('/',)


module.exports = router