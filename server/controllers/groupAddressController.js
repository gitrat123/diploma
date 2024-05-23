const {GroupAddress} = require('../models/models')
const ApiError = require('../error/ApiError')
class GroupAddressController{
    async create(req, res, next)
    {
        const {address} = req.body
        const addr = await GroupAddress.create({address})
        return res.json(addr)
    }

    async getAll(req, res)
    {
        const groupAddresses = await GroupAddress.findAll()
        return res.json(groupAddresses)
    }
}

module.exports = new GroupAddressController()