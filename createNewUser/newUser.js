import { connection } from "../db/database";

export default function createNewUser(name, email, password, ip, callback){
    return connection.query(`INSERT INTO railway.users(nome,email,senha,ip) VALUES('${name}','${email}','${password}','${ip}')`, callback)
}