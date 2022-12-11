import { Container, Row, Col, Button } from "react-bootstrap"
import projectImg from '../assets/imgs/full-best-steak-transformed.png'
import { useNavigate } from "react-router-dom"

export const Project3 = () => {

    const navigate = useNavigate();

    return (
        <div className="project-page">
        <section className="project-top d-flex justify-content-center align-items-center">
        <Container>
            <Row className="project-header">
                <Col xs={12} s={12} md={12} lg={12} xl={12} className="d-flex flex-column align-items-center justify-content-center">
                    <h1 className="text-center">Chef's Best Steakhouse</h1>
                    <p className="text-center">This page contains the project summary of Chef's Best Steakhouse which includes the project overview, tools used and live links to the project.</p>
                    <Button><a href="https://tsb314.github.io/RestaurantProject" target="_blank" rel="noreferrer">Live Demo</a></Button>
                </Col>
            </Row>
        </Container>
        </section>
        <section className="project-bottom">
            <Container>
            <Row className="project-overview m-3">
                <Col xs={12} s={12} md={12} lg={12} xl={12} className="d-flex flex-column">
                    <img src={projectImg} alt="project thumbnail" layout="fill"/>
                    <h2 className="mt-3 mb-3 pt-3 pb-3">Project Overview</h2>
                    <p>Chef's Best Steakhouse is my recreation of Ruth's Chris Steakhouse landing page. It is a single-page, responsive website. I admired the simplicity of the layout and design of Ruth's Chris landing page and was inspired to see if I could accomplish similar results with basic HTML, CSS, and JavaScript.</p>
                    <p>Feel free to check out the live links to this project.</p>
                    <h2 className="mt-3 mb-3 pt-3 pb-3">Tools Used</h2>
                    <Row>
                        <Col className="d-flex flex-wrap">
                            <div className="m-2 skills">HTML</div>
                            <div className="m-2 skills">CSS</div>
                            <div className="m-2 skills">JavaScript</div>
                        </Col>
                    </Row>
                    <h2 className="mt-3 mb-3 pt-3 pb-3">See Live</h2>
                    <div className="d-flex flex-wrap">
                    <Button className="m-2"><a href="https://tsb314.github.io/RestaurantProject" target="_blank" rel="noreferrer">Live Demo</a></Button>
                    <Button className="m-2" onClick={() => navigate(-1)}>Go Back</Button>
                    </div>
                </Col>
            </Row>
            </Container>
        </section>
        </div>
    )
}