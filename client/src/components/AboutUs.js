import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>О нас</h1>
          <p>
            Мы - это команда энтузиастов, которые стремятся создать лучшие образовательные продукты для детей. Наша миссия - помочь детям получить качественное образование и разовить свои таланты.
          </p>
        </Col>
      </Row>

      <Row id="our-story" className="my-5">
        <Col>
          <h2>Наша история</h2>
          <p>
            Мы начали свой путь в 2021 году, когда нам пришла в голову идея создать образовательную платформу для детей. Мы поняли, что существующие платформы не отвечают всем нашим требованиям, и решили создать свою собственную.
          </p>
          <p>
            Наша команда состоит из опытных педагогов, разработчиков и дизайнеров, которые работают вместе, чтобы создать лучшие образовательные продукты для детей.
          </p>
        </Col>
      </Row>

      <Row id="our-values" className="my-5">
        <Col>
          <h2>Наши ценности</h2>
          <Row>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Качество образования</Card.Title>
                  <Card.Text>
                    Мы стремимся предоставить детям качественное образование, которое будет помогать им в будущем.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Развитие талантов</Card.Title>
                  <Card.Text>
                    Мы верим, что каждый ребенок уникален и имеет свои таланты. Наша задача - помочь им раскрыться.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Индивидуальный подход</Card.Title>
                  <Card.Text>
                    Мы понимаем, что каждый ребенок имеет свои особенности и темпы обучения. Поэтому мы стремимся предоставить индивидуальный подход к каждому ребенку.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row id="our-team" className="my-5">
        <Col>
          <h2>С кого всё начиналось</h2>
          <Row>
            <Col md={4}>
              <Card className="text-center">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Иван Иванов</Card.Title>
                  <Card.Text>
                    Основатель и руководитель проекта.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Петр Петров</Card.Title>
                  <Card.Text>
                    Главный педагог проекта.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Анна Сидорова</Card.Title>
                  <Card.Text>
                    Дизайнер проекта.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
