const { Model, DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class Tips extends Model {}

Tips.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        content: {
            // type: DataTypes.STRING(1000)
            type: Sequelize.TEXT,
            allowNull: false,
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "tips",
    }
);

module.exports = Tips;
