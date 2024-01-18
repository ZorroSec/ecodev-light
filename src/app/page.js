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
            <form className="container">
                <div className="mb-3">
                    <label htmlFor="senha" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="senha"
                        id="senha"
                        placeholder="Sua Senha"
                    />
                </div>
                
            </form>
        </div>
    )
}