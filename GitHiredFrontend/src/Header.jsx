import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="header-container">
            <Container>
                <Navbar.Brand href="/" className="clickable-logo">
                    <img
                        alt="GitHired Logo Word"
                        src="/GitHired-Logo-Word.png"
                        className="header-logo" 
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/events">Events</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header