import { Container, Row, Col, Button } from "react-bootstrap"
import projectImg from '../assets/imgs/full-pretty-on-purpose-transformed.png'
import bfProjectImg from '../assets/imgs/pretty-on-purp-before-transformed.png'
import arrow from '../assets/imgs/arrow.png'
import { useNavigate } from "react-router-dom"

export const Project4 = () => {

    const navigate = useNavigate();

    return (
        <div className="project-page">
        <section className="project-top d-flex justify-content-center align-items-center" id="project-top">
        <Container>
            <Row className="project-header">
                <Col xs={12} s={12} md={12} lg={12} xl={12} className="d-flex flex-column align-items-center justify-content-center">
                    <h1 className="text-center">Pretty On Purpose</h1>
                    <p className="text-center">This page contains the project summary of Pretty On Purpose which includes the project overview, tools used and live links to the project.</p>
                    <Button><a href="https://www.hairoinhairco.com/" target="_blank" rel="noreferrer">Live Demo</a></Button>
                </Col>
            </Row>
        </Container>
        </section>
        <section className="project-bottom mt-3">
            <Container>
            <Row className="project-overview mt-3 p-3">
                <Col xs={12} s={12} md={12} lg={12} xl={12} className="d-flex flex-column">
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col xs={12} s={12} md={4} lg={4} xl={4} className="d-flex flex-column align-items-center justify-content-center m-3">
                        <img src={bfProjectImg} alt="project before thumbnail" width="500px" height="500px"/>
                        </Col>
                        <Col xs={12} s={12} md={2} lg={2} xl={2} className="d-flex flex-column align-items-center justify-content-xs-center justify-content-sm-center justify-content-center m-3">
                        <img src={arrow} alt="arrow pointing right" width="150px" height="150px"/>
                        </Col>
                        <Col xs={12} s={12} md={4} lg={4} xl={4} className="d-flex flex-column align-items-center justify-content-center m-3">
                        <img src={projectImg} alt="project after thumbnail" width="500px" height="500px"/>   
                        </Col> 
                    </Row>
                    <h2 className="mt-3 mb-3 pt-3 pb-3">Project Overview</h2>
                    <p>Pretty On Purpose is a freelance project I sought out to practice the principles of UX/UI. To begin this project, I conducted an analysis of the site. I took screenshoots and noted things I believe would make the site better. Some of those notes included: condensing the amount of color on the site and using 3-4 colors at most, using the full width of the screen, adding call to actions, changing the layout and organizing the content in a way that is easy and readable on first glance.</p>
                    <p>After writing out my initial thoughts, I used Adobe Color Picker to pull out colors from the company's logo to create a new color scheme. I then went on to draw up a handwritten mock-up of my ideas for the site. Once the mockups were approved by the owner, I went into Wix Editor and implemented my changes. The owner loved my changes and is actively using the site.</p>
                    <p>Feel free to check out the live links to this project.</p>
                    <h2 className="mt-3 mb-3 pt-3 pb-3">Tools Used</h2>
                    <Row>
                        <Col className="d-flex flex-wrap">
                            <div className="m-2 skills">Wix Editor</div>
                            <div className="m-2 skills">Adobe Color Picker</div>
                        </Col>
                    </Row>
                    <h2 className="mt-3 mb-3 pt-3 pb-3">See Live</h2>
                    <div className="d-flex flex-wrap">
                    <Button className="m-2"><a href="https://www.hairoinhairco.com/" target="_blank" rel="noreferrer">Live Demo</a></Button>
                    <Button className="m-2" onClick={() => navigate(-1)}>Go Back</Button>
                    </div>
                </Col>
            </Row>
            </Container>
        </section>
        </div>
    )
}
