import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const OurTeam = ({ type }) => {
  const teamMembers = [
    {
      name: 'Иван Иванов',
      position: 'Директор',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Петр Петров',
      position: 'Заместитель директора',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Анна Сидорова',
      position: 'Бухгалтер',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Мария Иванова',
      position: 'Учитель начальных классов',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Елена Петрова',
      position: 'Учитель русского языка и литературы',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Алексей Сидоров',
      position: 'Учитель математики',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const filteredTeamMembers =
    type === 'admin'
      ? teamMembers.filter((member) => member.position !== 'Учительница' && member.position !== 'Учитель')
      : type === 'teacher'
      ? teamMembers.filter((member) => member.position === 'Учительница' || member.position === 'Учитель')
      : teamMembers;

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center">{type === 'admin' ? 'Административный состав' : type === 'teacher' ? 'Преподавательский состав' : 'Наш коллектив'}</h1>
        </Col>
      </Row>
      <Row>
        {filteredTeamMembers.map((member, index) => (
          <Col key={index} md={4} className="my-3">
            <Card>
              <Card.Img variant="top" src={member.image} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.position}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurTeam;
