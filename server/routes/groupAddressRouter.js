const Router = require('express')
const router = new Router()
const groupAddressController = require('../controllers/groupAddressController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), groupAddressController.create)
router.get('/', groupAddressController.getAll)
//router.delete('/',)


module.exports = router