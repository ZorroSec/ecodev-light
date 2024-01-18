import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('railway', 'railway', 'Cv7U_a1OXPLh5N-ZryrA92FVpwXIQ4pJ', {
    dialect: 'mysql',
    host: 'roundhouse.proxy.rlwy.net'
})
