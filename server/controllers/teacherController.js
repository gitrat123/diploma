const {GroupTeacher} = require('../models/models')
class TeacherController{
    async create(req, res)
    {
        const {name, surname, patronymic, phone_number, email} = req.body
        const teacher = GroupTeacher.create({name, surname, patronymic, phone_number, email})
        return res.json(teacher)
    }

    async getAll(req, res)
    {
        const groupTeacher = await GroupTeacher.findAll()
        return res.json(groupTeacher)
    }
}

module.exports = new TeacherController()