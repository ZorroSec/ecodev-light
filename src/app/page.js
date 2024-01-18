import { createConnection } from "mysql2"
import connection from "../../db/database"
import createNewUser from "../../createNewUser/newUser"
// import sequelize from 'sequelize'
// import connectionDbSequelize from "../../sequelize/sequelize"
// import Users from "../../users/users"

 //initial route
export default function Home(){
    fetch("https://api.ipify.org/?format=json").then((res)=>{
        res.json().then((data)=>{
            createNewUser('josecipriano', 'joseiraildesciprianoribeiro@gmail.com', 'zorro_ff', data['ip'], (results, fields)=>{
                console.log({ message: 'success' })
            })
            console.log(data)
        })
    })
    // const query = await connection.query(`SELECT * FROM users WHERE ip = '${fetchIpJson['ip']}'`)
    // console.log(query)
}

