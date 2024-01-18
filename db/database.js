import mysql from 'mysql2'

export const connection = mysql.createConnection({
    host: 'roundhouse.proxy.rlwy.net',
    port: 54380,
    user: 'railway',
    password: 'Cv7U_a1OXPLh5N-ZryrA92FVpwXIQ4pJ',
    database: 'railway'
})