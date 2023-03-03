import { Col, Container, Row, Button } from "react-bootstrap"
import headShot from '../assets/imgs/headshot-removebg-preview.png'
import { SectionBottom } from "./SectionBottom"

export const Home = () => {
    return (
        <section className="home p-5 position-relative" id="home">
            <Container>
                <Row className="fullsection d-flex justify-content-center">
                    <Col xs={12} sm={12} md={6} lg={5} xl={5} className="d-flex justify-content-center align-items-center left m-2 p-5">
                        <img src={headShot} alt="Tia Brimer" width="350px" height="350px"/>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={5} xl={5} className="d-flex flex-column justify-content-center align-items-center right m-2">
                        <h1 className="text-center">Hi, I'm Tia Brimer</h1>
                        <p className="text-center">A front end web developer with a passion for making websites visually better.</p>
                        <div className="d-flex">
                        <Button><a href="Tia Brimer Resume 2023.pdf" download="Tia Brimer Resume 2023.pdf">Download resume</a></Button>
                        <Button><a href="#projects">Projects</a></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <SectionBottom />
        </section>
    )
}