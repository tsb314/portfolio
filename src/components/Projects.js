import { Container, Row, Col, Button } from "react-bootstrap"
import projectImg1 from '../assets/imgs/full-mockup-cos-transformed.png'
import projectImg2 from '../assets/imgs/full-portfolio-transformed.png'
import projectImg3 from '../assets/imgs/full-best-steak-transformed.png'
import { Link } from "react-router-dom"

export const Projects = () => {
    return (
        <section className="projects mt-5 pt-3 pb-3" id="projects">
        <Container>
            <Row>
                <Col className="d-flex flex-column align-items-center m-2 p-4">
                    <h2>Projects</h2>
                    <span>_</span>
                </Col>
            </Row>
            <Row className="mt-2 mb-2">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex justify-content-center align-items-center">
                    <img src={projectImg1} alt="project thumbnail" layout="fill"/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex flex-column align-items-center align-items-sm-center align-items-md-start align-items-xl-start justify-content-center p-4">
                    <h4>Mockup Cosmetics</h4>
                    <p>Mockup Cosmetics is an e-commerce website I developed using front-end tools with a splash of back-end work to provide a full user experience from browsing the site to placing an order.</p>
                    <Button><Link to="/project1">Review project</Link></Button>
                </Col>
            </Row>
            <Row className="mt-2 mb-2">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex justify-content-center align-items-center">
                    <img src={projectImg2} alt="project thumbnail" layout="fill"/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex flex-column align-items-center align-items-sm-center align-items-md-start align-items-xl-start justify-content-center p-4">
                    <h4>Portfolio</h4>
                    <p>My portfolio is the website you are viewing now. This site was created with front-end tools and showcases me as a designer and developer.</p>                    
                    <Button><Link to="/project2">Review project</Link></Button>
                </Col>
            </Row>
            <Row className="mt-2 mb-2">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex justify-content-center align-items-center">
                    <img src={projectImg3} alt="project thumbnail" layout="fill"/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex flex-column align-items-center align-items-sm-center align-items-md-start align-items-xl-start justify-content-center p-4">
                    <h4>Chef's Best Steakhouse</h4>
                    <p>Chef's Best Steakhouse is my recreation of the infamous Ruth's Chris Steakhouse. I was drawn to the simplicity of the website and thought it would make for a great project for basic front-end tools.</p>
                    <Button><Link to="/project3">Review project</Link></Button>
                </Col>
            </Row>
        </Container>
        </section>
    )
}