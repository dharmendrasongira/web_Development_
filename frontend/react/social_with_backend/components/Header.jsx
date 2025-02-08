import "bootstrap/dist/css/bootstrap.min.css";


const Header = () => {
  return (
    <header className="p-3 text-white w-100" style={{ backgroundColor: "#007bff" }}>
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <a href="/" className="d-flex align-items-center text-white text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" className="bi bi-bootstrap" viewBox="0 0 16 16">
              <path d="M5.062 12c.565 0 .927-.287 1.14-.759l.384-1.042H4.44l-.384 1.042c-.213.472-.575.759-1.14.759-.818 0-1.264-.613-1.264-1.316 0-.66.385-1.136.978-1.267 1.119-.251 2.236-.251 3.354 0 .593.131.978.607.978 1.267 0 .703-.446 1.316-1.264 1.316zM8 5.5c.516 0 .813.344.813.814 0 .47-.297.814-.813.814H3.687c-.516 0-.813-.344-.813-.814 0-.47.297-.814.813-.814H8zm4 6.5c.818 0 1.264-.613 1.264-1.316 0-.66-.385-1.136-.978-1.267-1.119-.251-2.236-.251-3.354 0-.593.131-.978.607-.978 1.267 0 .703.446 1.316 1.264 1.316.565 0 .927-.287 1.14-.759l.384-1.042h2.146l-.384 1.042c-.213.472-.575.759-1.14.759z"/>
            </svg>
          </a>

          <ul className="nav me-auto">
            <li><a href="#" className="nav-link text-white">Home</a></li>
            <li><a href="#" className="nav-link text-white">Features</a></li>
            <li><a href="#" className="nav-link text-white">Pricing</a></li>
            <li><a href="#" className="nav-link text-white">FAQs</a></li>
            <li><a href="#" className="nav-link text-white">About</a></li>
          </ul>

          <form className="d-flex">
            <input type="search" className="form-control me-2" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">Login</button>
            <button type="button" className="btn btn-warning">Sign-up</button>
          </div>
        </div>
      </div>
    </header>
  );
};



export default Header;
