import React from "react";
import "./App.css";
import face from "./assets/face.jpeg";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

export default class App extends React.Component<{}> {
  public render() {
    return (
      <Container id="landing-page" fluid>
        <div className="centerPeice">
          <Row className="myRow">
            <Col xs={6} md={3} className="centerVertical">
              <Card className="centerText">
                <p>-- Hi, I'm --</p>
                <h1>John Reimer</h1>
                {/* <p>.....................</p> */}
                <hr />
                <div className="social-links">
                  {/* Github */}
                  <a
                    href="https://github.com/jreimer107"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-github" aria-hidden="true" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/john-reimer-66157314a/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin" aria-hidden="true" />
                  </a>
                </div>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Image src={face} roundedCircle fluid />
            </Col>
            <Col className="right-col">
              <Card className="skills">
                <Card.Body>
                  <Card.Title>Skills</Card.Title>
                  {/* <h1>C#</h1> */}
                  <i className="fab fa-python" aria-hidden="true" />
                  <strong>C#</strong> <br />
                  <strong>C</strong> <br />
                  <i className="fab fa-js-square" aria-hidden="true" /> <br />
                  <i className="fab fa-react" aria-hidden="true" /> <br />
                  <i className="fab fa-java" aria-hidden="true" /> <br />
                  <i className="fab fa-git" aria-hidden="true" /> <br />
                  <i className="fab fa-html5" aria-hidden="true" /> <br />
                  <i className="fab fa-linux" aria-hidden="true" /> <br />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="myRow">
            <Col xs={12} md={12}>
              <Card className="descriptionCard">
                <p>
                  I'm a Development Consultant for Esker, Inc. I've been working
                  in software for two years, and my projects include a fitness
                  app, a neural network designed entirely on an FPGA, a
                  rogue-lite video game, and a kernel network debugging tool. I
                  live in Madison, Wisconsin, USA. I'm also a dungeon master and
                  a musician. You can find my both my portfolio and my session
                  recordings here.
                </p>
                <p>jreimer107@gmail.com -- 262-902-4506</p>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
