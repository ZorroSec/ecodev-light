'use client'

import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react"
export default function Home(){
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')
    const handleClick = (inputEmail, inputPassword)=>{
        setEmail(inputEmail.target.value)
        setSenha(inputPassword.target.value)
    }
    return (
        <div>
            <header className="py--3 d-flex justify-content-center text-bg-dark">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a href="/" className="nav-link text-white">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a href="/api/v1" className="nav-link text-white">Api</a>
                    </li>
                    <li className="nav-item">
                        <a href="/terms" className="nav-link text-white">Termos de uso</a>
                    </li>
                </ul>
            </header>
            <form className="container mt-3">
                <div className="mb-3">
                    <h2>Login</h2>
                </div>
                <div className="container mb-3 p-4">
                    <p>
                        Email: {email}
                        <br/>
                        Senha: {senha}
                    </p>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        aria-describedby="emailHelpId"
                        placeholder="abc@mail.com"
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                    <small id="emailHelpId" className="form-text text-muted">Nao iremos compartilhar seu email com mais, ninguém.</small>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="senha" className="form-label">Senha</label>
                    <input
                        type="password"
                        className="form-control"
                        name="senha"
                        id="senha"
                        placeholder="Sua Senha"
                        onChange={(e)=> setSenha(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <button className="btn btn-success" onClick={handleClick}>Entrar</button>
                </div>
                
            </form>
        </div>
    )
}