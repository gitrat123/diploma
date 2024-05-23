const {GroupType} = require('../models/models')
const ApiError = require('../error/ApiError')
class GroupTypeController{
    async create(req, res, next)
    {
        const {name} = req.body
        const type = await GroupType.create({name})
        return res.json(type)
    }

    async getAll(req, res)
    {
        const groupTypes = await GroupType.findAll()
        return res.json(groupTypes)
    }
}

module.exports = new GroupTypeController()