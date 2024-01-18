export default function Home(){
  return (
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">Ecodev-light</a>
          </div>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/terms" className="nav-link px-2">Termos</a></li>
            <li><a href="/api" className="nav-link px-2">Api</a></li>
            <li><a href="/blog" className="nav-link px-2">Blog</a></li>
          </ul>
        </div>
      </header>
      <hr className="b-example-divider" />
    </div>
    
  )
}