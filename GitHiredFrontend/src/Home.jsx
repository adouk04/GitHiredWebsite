import { Container, Button } from "react-bootstrap";
import "./styles.css";

function Home() {
    /* test */
    return (
        <Container fluid className="body-container">
            <img src="/GitHired-Logo-Transparent.png" alt="GitHired Logo" className="logo"/>
            <h1>Welcome to GitHired</h1>
            
            <Button variant="primary" href="https://discord.gg/sSzzyJrHK3" 
                    target="_blank" rel="noopener noreferrer">Join Our Discord</Button> 
        </Container>
    );
}

export default Home