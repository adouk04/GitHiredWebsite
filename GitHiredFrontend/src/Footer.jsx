import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <Footer>
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col xs="Auto">
                        <a href="https://discord.gg/sSzzyJrHK3" target="_blank" 
                            rel="noopener noreferrer">

                        </a>
                            <img src="/discord-mark-white.png" alt="Discord Logo"/>
                    </Col>
                </Row>
            </Container> 
        </Footer>
               
    );
}

export default Footer