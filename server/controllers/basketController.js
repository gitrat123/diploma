const { Group, Basket, BasketEnrollment } = require("../models/models")
const ApiError = require('../error/ApiError');

class BasketController {

    async addToBasket(req,res,next){
        const user = req.user
        const {GroupId} = req.body
        const basket = await BasketEnrollment.create({basketId : user.id, GroupId : GroupId})
        return res.json(basket)
    }

    async getBasketUser(req,res){
   //     const {id} = req.user
   //     const basket = await BasketEnrollment.findAll({include: {
   //             model: Group
   //         }, where: {basketId: id}})
//
  //      return res.json(basket)
    }

}

module.exports = new BasketController()