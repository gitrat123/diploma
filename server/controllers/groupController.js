const uuid = require('uuid')
const path = require('path')

const { Group, GroupInfo } = require('../models/models')
const ApiError = require('../error/ApiError')

class GroupController {
  async create(req, res, next) {
    try {
      const { name, GroupTypeId, GroupAddressId, info } = req.body
      const { img } = req.files
      let fileName = uuid.v4() + ".jpg"

      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      const group = await Group.create({ name, GroupTypeId, GroupAddressId, img: fileName })

      if (info) {
        const parsedInfo = JSON.parse(info)
        parsedInfo.forEach(i => {
          GroupInfo.create({
            title: i.title,
            description: i.description,
            GroupId: group.id
          })
        });
      }

      return res.json(group)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let {GroupAddressId, GroupTypeId, limit, page } = req.query
    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit
    let groups;
    if (!GroupTypeId && !GroupAddressId) {
      groups = await Group.findAndCountAll({ limit, offset })
    }

    if (GroupTypeId && !GroupAddressId) {
      groups = await Group.findAndCountAll({ where: { GroupTypeId }, limit, offset })
    }

    if (!GroupTypeId && GroupAddressId) {
      groups = await Group.findAndCountAll({ where: { GroupAddressId }, limit, offset })
    }

    if (GroupTypeId && GroupAddressId) {
      groups = await Group.findAndCountAll({ where: { GroupTypeId, GroupAddressId }, limit, offset })
    }

    return res.json(groups)
  }

  async getOne(req, res) {
    const { id } = req.params
    const group = await Group.findOne(
      {
        where: { id },
        include: [{ model: GroupInfo, as: 'info' }]
      },
    )
    return res.json(group)
  }
}

module.exports = new GroupController()