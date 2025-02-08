const Footer = () => {
    return (
      <footer className="text-white py-4 w-100" style={{ backgroundColor: "#007bff" }}>
        <div className="container-fluid text-center">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">About</a></li>
          </ul>
          <p className="mb-0">© 2024 Company, Inc</p>
        </div>
      </footer>
    );
  };
export default Footer;