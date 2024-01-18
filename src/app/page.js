import "bootstrap/dist/css/bootstrap.css"
import mysql from "mysql2"
import createNewUser from "../../createNewUser/newUser"
import { connection } from "../../db/database"
import { redirect } from "next/navigation"
import "../../css/App.css"
// import sequelize from 'sequelize'
// import connectionDbSequelize from "../../sequelize/sequelize"
// import Users from "../../users/users"

 //initial route
export default async function Home(){
    // fetch("https://api.ipify.org/?format=json").then((res)=>{
    //     res.json().then((data)=>{
    //         connection.query(`SELECT * FROM users WHERE ip = '${data['ip']}'`, (results, fields)=>{
    //             if(fields.find((user)=> user.ip === data['ip'])){
    //                 return
    //             }else{
    //                 redirect('/login')
    //             }
    //             // console.log(fields)
    //         })
    //         console.log(data)
    //     })
    // })
    const fetchIp = await fetch("https://api.ipify.org/?format=json")
    const fetchIpJson = await fetchIp.json()
    console.log(fetchIpJson)
    const [ results, fields ]= await connection.query(`SELECT * FROM users WHERE ip = '${fetchIpJson['ip']}'`)
    console.log(results)
    return (
        <>
            <header className="p-3 mb-3 border-bottom">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                            <h3>
                                Ecodev <span><i>Light</i></span>
                            </h3>
                        </a>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <a href="/" className="nav-link py-2 link-body-emphasis text-decoration-underline">Recentes</a>
                            </li>
                            <li>
                                <a href="/relevantes" className="nav-link px-2 link-body-emphasis">Relevantes</a>
                            </li>
                        </ul>
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <input type="search" className="form-control" placeholder="Pesquisar..." aria-label="Search" />
                        </form>
                        <div className="dropdown text-end">
                            <a href="" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Conta
                            </a>
                            <ul className="dropdown-menu text-small">
                                <li>
                                    <a href="/perfil" className="dropdown-item">Perfil</a>
                                </li>
                                <li>
                                    <a href="/posts" className="dropdown-item">Seus posts</a>
                                </li>
                                <li>
                                    <a href="/publicar" className="dropdown-item">Novo conteúdo</a>
                                </li>
                                <li>
                                    <a href="/editar" className="dropdown-item">Editar perfil</a>
                                </li>
                                <hr/>
                                <li>
                                    <a href="/deletar" className="dropdown-item text-red">Deletar perfil</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        </>
        
    )
    // const query = await connection.query(`SELECT * FROM users WHERE ip = '${fetchIpJson['ip']}'`)
    // console.log(query)
}

