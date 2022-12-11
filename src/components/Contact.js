import {Container, Row, Col, Card } from "react-bootstrap"

export const Contact = () => {
    return (
        <section className="contact mt-3" id="contact">
        <Container>
            <Row>
                <Col className="d-flex flex-column align-items-center m-2 p-4">
                    <h2>Contact Me</h2>
                    <span>_</span>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center mt-5">
                <Col xs={12} md={4} xl={4} className="d-flex justify-content-center align-items-center">
                <Card style={{ width: '18rem' }} className="m-3">
                        <Card.Body>
                            <Card.Title className="text-center"><i className="bi bi-phone-vibrate-fill"></i></Card.Title>
                            <Card.Title className="text-center">Call Me</Card.Title>
                            <Card.Text className="text-center">
                            314-479-4832
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Col>
                <Col xs={12} md={4} xl={4} className="d-flex justify-content-center align-items-center">
                <Card style={{ width: '18rem' }} className="m-3">
                        <Card.Body>
                            <Card.Title className="text-center"><i className="bi bi-envelope-at-fill"></i></Card.Title>
                            <Card.Title className="text-center">Email Me</Card.Title>
                            <Card.Text className="text-center">
                            tia_brimer@yahoo.com
                            </Card.Text>
                        </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        </section>
    )
}