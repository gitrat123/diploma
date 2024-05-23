const ApiError = require('../error/ApiError');
const {User, Basket, Child} = require('../models/models');

class ChildController {

    async addChildToUser(req, res, next) {
      try {
          const { id } = req.params;
          const { name, surname, patronymic, age } = req.body;

          const user = await User.findOne({ where: { id } });
          if (!user) {
              return next(ApiError.badRequest('Пользователь не найден'));
          }

          const child = await Child.create({
              name,
              surname,
              patronymic,
              age,
              UserId: id,
          });

          return res.json(child);
      } catch (e) {
          console.log(e);
          return next(ApiError.internal(e.message));
      }
  }

  async getUserChildren(req, res, next) {
    try {
        const { id } = req.params;
        const userChildren = await Child.findAll({ where: { UserId: id } });

        return res.json(userChildren);
    } catch (e) {
        console.log(e);
        return next(ApiError.internal(e.message));
    }
  }

}

module.exports = new ChildController()
