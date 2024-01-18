import mysql from "mysql2"
import createNewUser from "../../createNewUser/newUser"
import { connection } from "../../db/database"
// import sequelize from 'sequelize'
// import connectionDbSequelize from "../../sequelize/sequelize"
// import Users from "../../users/users"

 //initial route
export default function Home(){
    fetch("https://api.ipify.org/?format=json").then((res)=>{
        res.json().then((data)=>{
            connection.query(`SELECT * FROM users WHERE ip = '${data['ip']}'`, (results, fields)=>{
                if(fields.find((user)=> user.ip === data['ip'])){
                    console.log('existe')
                }else{
                    console.log('nao existe')
                }
                // console.log(fields)
            })
            console.log(data)
        })
    })
    // const query = await connection.query(`SELECT * FROM users WHERE ip = '${fetchIpJson['ip']}'`)
    // console.log(query)
}

