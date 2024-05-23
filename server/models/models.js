const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('User', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    patronymic: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: true}, 
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('Basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketEnrollment = sequelize.define('BasketEnrollment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Child = sequelize.define('Child', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    patronymic: {type: DataTypes.STRING, allowNull: false},
    age: {type: DataTypes.INTEGER, allowNull: false},
})

const Group = sequelize.define('Group', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const GroupAddress = sequelize.define('GroupAddress', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    address: {type: DataTypes.STRING, allowNull: false},
})

const GroupInfo = sequelize.define('GroupInfo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const GroupRating = sequelize.define('GroupRating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const GroupTeacher = sequelize.define('GroupTeacher', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    patronymic: {type: DataTypes.STRING, allowNull: false},
    phone_number: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
})

const GroupType = sequelize.define('GroupType', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

const Enrollment = sequelize.define('Enrollment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Schedule = sequelize.define('Schedule', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    monday_schedule: {type: DataTypes.STRING, allowNull: false},
    tuesday_schedule: {type: DataTypes.STRING, allowNull: false},
    wednesday_schedule: {type: DataTypes.STRING, allowNull: false},
    thursday_schedule: {type: DataTypes.STRING, allowNull: false},
    friday_schedule: {type: DataTypes.STRING, allowNull: false},
})

User.hasMany(Child)
Child.belongsTo(User)

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketEnrollment)
BasketEnrollment.belongsTo(Basket)

Enrollment.hasMany(BasketEnrollment)
BasketEnrollment.belongsTo(Enrollment)

User.hasMany(GroupRating)
GroupRating.belongsTo(User)

Child.hasMany(Enrollment)
Enrollment.belongsTo(Child)

Group.hasMany(Enrollment)
Enrollment.belongsTo(Group)

Group.hasMany(Schedule)
Schedule.belongsTo(Group)

Group.hasMany(GroupTeacher)
GroupTeacher.belongsTo(Group)

Group.hasMany(GroupRating)
GroupRating.belongsTo(Group)

Group.hasMany(GroupInfo, {as: 'info'})
GroupInfo.belongsTo(Group)

GroupType.hasMany(Group)
Group.belongsTo(GroupType)

GroupAddress.hasMany(Group)
Group.belongsTo(GroupType)



module.exports = {
    User,
    Basket,
    BasketEnrollment,
    Child,
    Group,
    GroupAddress,
    GroupInfo,
    GroupRating,
    GroupTeacher,
    GroupType,
    Enrollment,
    Schedule
}