import "bootstrap/dist/css/bootstrap.css"
export default function Home(){
  return (
    <div>
      <header className="d-flex justify-content-center p-3 text-bg-dark">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="/" className="nav-link text-white">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="/terms" className="nav-link text-white">Termos</a>
          </li>
          <li className="nav-item"><a href="/api/v1" className="nav-link text-white">Api</a></li>
        </ul>
        <hr className="b-example-divider text-white" />
      </header>
      <form action="/" className="container mt-10 mb-3 p-3">
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="form-control" placeholder="Seu email" />
        </div>
        <div className="mb-3">
          <label htmlFor="senha" className="form-label">Senha</label>
          <input
            type="password"
            className="form-control"
            name="senha"
            id="senha"
            placeholder="Sua senha"
          />
        </div>
        
      </form>
    </div>
    
  )
}