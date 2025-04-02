import { Container, Col, Row} from "react-bootstrap"

function InfoSectionNoButton({imgSrc, title, title2, text, text2, imageRight}) {
    return (

        <Container className = 'py-4'>
            <Row className='d-flex pb-4 align-items-center'>
                {imageRight ? (
                <>
                    <Col md={7} className='text-start'>
                        <h1>{title}</h1>
                        <p>{text}</p>
                        <h2>{title2}</h2>
                        <p>{text2}</p>
                    </Col>
                    <Col md={5} className='d-flex'>
                        <img className="d-block meetingLocation m-auto rounded" src={imgSrc} alt="Meeting Place"/>
                    </Col>
                </>
                ) : (
                <>
                    <Col md={5} className='d-flex'>
					<img className="d-block meetingLocation m-auto rounded" src={imgSrc} alt="Meeting place"/>
                    </Col>
                    <Col md={7} className='text-end'>
                        <h1>{title}</h1>
                        <p>{text}</p>
                        <p>{text2}</p>
                    </Col>
                </>
                )}
            </Row>
        </Container>
    )
}

export default InfoSectionNoButton