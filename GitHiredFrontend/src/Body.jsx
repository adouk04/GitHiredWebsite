import { Container, Button } from "react-bootstrap";
import "./styles.css";

function Body() {
    return (
        <Container fluid className="body-container">
            <img src="/GitHired-Logo-Transparent.png" alt="GitHired Logo" className="logo"/>
            <h1>Welcome to GitHired</h1>
            <Button variant="primary">Join Now</Button> 
        </Container>
    );
}

export default Body