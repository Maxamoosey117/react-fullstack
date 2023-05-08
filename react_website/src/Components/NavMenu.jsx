import {Link} from 'react-router-dom';
import {Navbar, Container, Nav} from 'react-bootstrap';

function NavMenu() {
    return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src="/images/titanfall-logo-white.png"
                            alt="Titanfall logo"
                            width="50"
                            height="50"
                        />
                        <span className="navbar-brand mb-0 h1">Titanfall Games</span>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/factions" className="nav-link">
                            Factions
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    );
}

export default NavMenu;
