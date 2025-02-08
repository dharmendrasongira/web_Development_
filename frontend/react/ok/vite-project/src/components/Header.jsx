import{Nav,Navbar,Container} from "react-bootstrap"
import{Link} from "react-router-dom"
import Logo from "../assets/logo/logo.png"
import "../Style/Header.css"
const Header=()=>{
return(
<>
<header>
<Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="logo">
          <img src={Logo} alt="logo" className="img-fluid" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link}to="/">Home</Nav.Link>
            <Nav.Link as={Link}to="/about">about</Nav.Link>
            <Nav.Link as={Link}to="/menu">our menu</Nav.Link>
            <Nav.Link as={Link}to="/shop ">shop</Nav.Link>
            <Nav.Link as={Link}to="/blog">blog</Nav.Link>
            <Nav.Link  as={Link}to="/contact">contact</Nav.Link>
            <Nav.Link  as={Link}to="/"><div className="cart">
            <i className="bi bi-bag fs-5"></i></div></Nav.Link>
            <em className="roundpoint">2</em>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>

</>
);
}
export default Header;