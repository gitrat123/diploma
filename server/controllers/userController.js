const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const path = require('path');
const fs = require('fs');
const {User, Basket, Child} = require('../models/models');

const generateJwt = (id, email, role, name, surname, patronymic) => {
    return jwt.sign(
        {id, email, role, name, surname, patronymic},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}


class UserController {
    async registration(req, res, next) {
        try {
          const {name, surname, patronymic, email, password, role} = req.body;
          const profilePicture = req.files.profilePicture; 
          let fileName = uuid.v4() + "." + profilePicture.mimetype.split("/")[1]; 


          if (!name || !surname || !patronymic || !email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'));
          }

          const candidate = await User.findOne({where: {email}});
          if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'));
          }
          
          const hashPassword = await bcrypt.hash(password, 5);
          const user = await User.create({
            name,
            surname,
            patronymic,
            email,
            role,
            password: hashPassword,
            img: fileName,
          });

          const basket = await Basket.create({UserId: user.id});

          if (profilePicture) {
            profilePicture.mv(path.resolve(__dirname, '..', 'static', fileName));
            await user.save();
          }          

          const token = generateJwt(user.id, user.email, user.role, user.name, user.surname, user.patronymic)
          return res.json({token});
        } catch (e) {
          console.log(e);
          return next(ApiError.internal(e.message));
        }
      }

    async login(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })

        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }

        let comparePassword = bcrypt.compareSync(password, user.password)

        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }

        const token = generateJwt(user.id, user.email, user.role)
        return res.json({ token })
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({ token })
    }
}

module.exports = new UserController()
