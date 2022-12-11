import { Container, Row, Col, Button } from "react-bootstrap"
import projectImg from '../assets/imgs/full-portfolio-transformed.png'
import { useNavigate } from "react-router-dom"

export const Project2 = () => {

    const navigate = useNavigate();

    return (
        <div className="project-page">
        <section className="project-top d-flex justify-content-center align-items-center">
        <Container>
            <Row className="project-header">
                <Col xs={12} s={12} md={12} lg={12} xl={12} className="d-flex flex-column align-items-center justify-content-center">
                    <h1 className="text-center">Portfolio</h1>
                    <p className="text-center">This page contains the project summary of Portfolio which includes the project overview, tools used and live links to the project.</p>
                    <Button><a href="https://localhost:3000" target="_blank" rel="noreferrer">Live Demo</a></Button>
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
                    <p>My portfolio is a living and ever-changing collection of my web development work. It reflects my always-evolving skills, experience, and projects. Each project on this site showcases my skills and utilizes different front-end tools. Feel free to browse around and view the live links of my projects.</p>
                    <h2 className="mt-3 mb-3 pt-3 pb-3">Tools Used</h2>
                    <Row>
                        <Col className="d-flex flex-wrap">
                            <div className="m-2 skills">React JS</div>
                            <div className="m-2 skills">BootStrap</div>
                            <div className="m-2 skills">GitHub</div>
                            <div className="m-2 skills">Netlify</div>
                            <div className="m-2 skills">Visual Studio Code</div>
                        </Col>
                    </Row>
                    <h2 className="mt-3 mb-3 pt-3 pb-3">See Live</h2>
                    <div className="d-flex flex-wrap">
                    <Button className="m-2"><a href="https://localhost:3000" target="_blank" rel="noreferrer">Live Demo</a></Button>
                    <Button className="m-2" onClick={() => navigate(-1)}>Go Back</Button>
                    </div>
                </Col>
            </Row>
            </Container>
        </section>
        </div>
    )
}