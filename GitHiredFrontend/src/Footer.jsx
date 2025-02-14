import { Navbar, Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <footer>
            <Navbar bg="dark" variant="dark" expand="lg" className="header-container">
                <Container className="d-flex flex-column align-items-center justify-content-center pt-2 pb-0">

                    <a href="https://discord.gg/sSzzyJrHK3" target="_blank"
                        rel="noopener noreferrer" style={{ marginLeft: "10px" }}>
                        <img src="/discord-mark-white.png" alt="Discord Logo"
                            style={{ width: "30px", height: "25px" }}
                        />
                    </a>

                    <Navbar.Text className="mt-3 small">
                        © GitHired 2025
                    </Navbar.Text>

                </Container>
            </Navbar>
        </footer>
    );
}

export default Footer