const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'mysql',
    database: 'socialdb',
    username: 'myuser',
    password: 'mypass'
})

const ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}
const USERNAME_DEF = {
    type: Sequelize.DataTypes.STRING(30),
    unique: true,
    allowNull: false
}
const TITLE_DEF = {
    type: Sequelize.DataTypes.STRING(140),
    allowNull: false
}

const Users = db.define('user', {
    id: ID_DEF,
    username: USERNAME_DEF
})

const Posts = db.define('post', {
    id: ID_DEF,
    title: TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    }
})

const Comments = db.define('comment', {
    id: ID_DEF,
    title: TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT('tiny')
    }
})

Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)

exports = module.exports = {
    db,
    Users,
    Posts,
    Comments
}