import sequelize from "sequelize";
import connectionDbSequelize from "../sequelize/sequelize";

export const Users = connectionDbSequelize.define('users', {
    id: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: sequelize.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: sequelize.DataTypes.STRING,
        allowNull: false
    },
    ip: {
        type: sequelize.DataTypes.STRING,
        allowNull: false
    }
})
