const Router = require('express')
const router = new Router()

const groupRouter = require('./groupRouter')
const groupTypeRouter = require('./groupTypeRouter')
const groupAddressRouter = require('./groupAddressRouter')
const scheduleRouter = require('./scheduleRouter')
const teacherRouter = require('./teacherRouter')
const userRouter = require('./userRouter')
const basketRouter = require('./basketRouter')
const childRouter = require('./childRouter')

router.use('/user', userRouter)
router.use('/group', groupRouter)
router.use('/groupType', groupTypeRouter)
router.use('/groupAddress', groupAddressRouter)
router.use('/teacher', teacherRouter)
router.use('/schedule', scheduleRouter)
router.use('/basket', basketRouter)
router.use('/child', childRouter)

module.exports = router