import { Container, Row, Col } from "react-bootstrap"

export const Footer = () => {
    return (
        <section className="footer mt-3 pt-4">
        <Container>
            <Row>
                <Col xs={12} md={6} xl={6} className="logo d-flex flex-column align-items-start pt-3 pb-3">
                Tia Brimer<br/>
            <span>front end web developer</span>
                </Col>
                <Col xs={12} md={6} xl={6} className="d-flex flex-column align-items-start align-items-sm-start align-items-md-end align-items-xl-end pt-2 pb-2">
                    <h4>Social</h4>
                    <div className="d-flex justify-content-start">
                    <a href="https://github.com/tsb314" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center footer-bottom">
                <p>Copyright 2022. Made by Tia Brimer</p>
                </Col>
            </Row>
        </Container>
        </section>
    )
}