import { Container, Row, Col, Button } from "react-bootstrap"

export const About = () => {
    return (
        <section className="about mt-3" id="about">
        <Container>
            <Row>
                <Col className="d-flex flex-column align-items-center m-2 p-4">
                    <h2>About Me</h2>
                    <span>_</span>
                </Col>
            </Row>
            <Row className="mt-3 p-3 d-flex justify-content-around">
                <Col xs={12} sm={12} md={6} lg={5} xl={5} className="d-flex flex-column align-items-start m-2 p-3">
                    <h5>Hello, I am Tia Brimer!</h5>
                    <p>I am a front-end web developer living in Tulsa, Oklahoma. I enjoy making websites aesthetically pleasing.</p>
                    <p>I discovered my passion for building web applications and websites during my college internship. I continued to earn a Bachelor of Science in Computer Science and quickly dove into the Information Technology industry at an oil and gas company. For the past five years, I've worked as a Developer and Development Analyst to develop custom components for web-based applications.</p>
                    <p>However, the desire to become a front-end web developer kept calling my name. I decided to pivot and focus on learning all things web development in my spare time. I have researched and studied the art of web design through numerous resources and sharpened my skills by enrolling in a self-paced online code camp. Feel free to look around my portfolio and let me know how I did.</p>
                    <Button><a href="#contact">Contact Me</a></Button>
                </Col>
                <Col xs={12} sm={12} md={6} lg={5} xl={5} className="d-flex flex-column align-items-start m-2 p-3">
                    <h5>Skills</h5>
                    <Row>
                        <Col className="d-flex flex-wrap">
                            <div className="m-2 skills">HTML</div>
                            <div className="m-2 skills">CSS</div>
                            <div className="m-2 skills">JavaScript</div>
                            <div className="m-2 skills">Java</div>
                            <div className="m-2 skills">React JS</div>
                            <div className="m-2 skills">Next JS</div>
                            <div className="m-2 skills">BootStrap</div>
                            <div className="m-2 skills">Responsive Design</div>
                            <div className="m-2 skills">Problem-Solving</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </section>
    )
}