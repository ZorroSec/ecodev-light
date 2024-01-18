import "bootstrap/dist/css/bootstrap.css"
export default function Home(){
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
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        aria-describedby="emailHelpId"
                        placeholder="abc@mail.com"
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
                    />
                </div>
                <div className="mb-3">
                    <button className="btn btn-success">Entrar</button>
                </div>
                
            </form>
        </div>
    )
}