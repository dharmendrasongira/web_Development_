
import {Link} from "react-router-dom"

const Sidebar = () => {



  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "180px", height: "100vh" }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" className="bi bi-bootstrap" viewBox="0 0 16 16">
          <path d="M5.062 12c.565 0 .927-.287 1.14-.759l.384-1.042H4.44l-.384 1.042c-.213.472-.575.759-1.14.759-.818 0-1.264-.613-1.264-1.316 0-.66.385-1.136.978-1.267 1.119-.251 2.236-.251 3.354 0 .593.131.978.607.978 1.267 0 .703-.446 1.316-1.264 1.316zM8 5.5c.516 0 .813.344.813.814 0 .47-.297.814-.813.814H3.687c-.516 0-.813-.344-.813-.814 0-.47.297-.814.813-.814H8zm4 6.5c.818 0 1.264-.613 1.264-1.316 0-.66-.385-1.136-.978-1.267-1.119-.251-2.236-.251-3.354 0-.593.131-.978.607-.978 1.267 0 .703.446 1.316 1.264 1.316.565 0 .927-.287 1.14-.759l.384-1.042h2.146l-.384 1.042c-.213.472-.575.759-1.14.759z"/>
        </svg>
        <span className="fs-4 ms-2">Sidebar</span>
      </a>

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link   to="/"
            className="nav-link  text-white"
           
          >
            🏠 Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/create-post"
            className="nav-link $ text-white"
            
          >
            👤 Create Post
          </Link>
        </li>
      </ul>

      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown">
          <img src="https://github.com/mdo.png" alt="profile" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
