import { Container, Col, Row, Button } from "react-bootstrap"


function InfoSection({ title, text, imgSrc, buttonText, imageRight }) {
    console.log("InfoSection component is rendering");
    return (
        <Container className='py-4'>
            <Row className='d-flex pb-4 align-items-center'>
                {imageRight ? (
                <>
                    <Col md={7} className='text-start'>
                        <h1>{title}</h1>
                        <p>{text}</p>
                        
                        {/* add button if needed but right now its irrelavant <Button>{buttonText}</Button> */}
                    </Col>
                    <Col md={5} className='d-flex'>
                        <img className="d-block logo m-auto" src={imgSrc} alt="GitHired Logo"/>
                    </Col>
                </>
                ) : (
                <>
                    <Col md={5} className='d-flex'>
					<img className="d-block logo m-auto" src={imgSrc} alt="GitHired Logo"/>
                    </Col>
                    <Col md={7} className='text-end'>
                        <h1>{title}</h1>
                        <p>{text}</p>
                        {/* add button if needed but right now its irrelavant <Button>{buttonText}</Button> */}
                    </Col>
                </>
                )}
            </Row>
        </Container>
    )
}

export default InfoSection
