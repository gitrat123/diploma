const Router = require('express')
const router = new Router()
const teacherController = require('../controllers/teacherController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), teacherController.create)
router.get('/', teacherController.getAll)
//router.delete('/',)


module.exports = router