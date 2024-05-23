const {Schedule} = require('../models/models')
class ScheduleController{
    async create(req, res)
    {
        const {
            monday_schedule, 
            tuesday_schedule, 
            wednesday_schedule, 
            thursday_schedule, 
            friday_schedule,
            GroupId
        } = req.body

        const schedule = await Schedule.create({monday_schedule, tuesday_schedule, wednesday_schedule, thursday_schedule, friday_schedule, GroupId})
        return res.json(schedule)
    }

    async getAll(req, res)
    {
        const groupSchedule = await Schedule.findAll()
        return res.json(groupSchedule)
    }

}

module.exports = new ScheduleController()