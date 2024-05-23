import { Button, Row, Col, ListGroup, Card, Container } from 'react-bootstrap';
import { useState } from 'react';

const documents = [
  {
    name: 'Приказ о создании детского сада',
    type: 'admin',
    url: 'https://example.com',
  },
  {
    name: 'Устав детского сада',
    type: 'admin',
    url: 'https://example.com',
  },
  {
    name: 'Положение о детском саду',
    type: 'admin',
    url: 'https://example.com',
  },
  {
    name: 'Педагогическая концепция детского сада',
    type: 'teacher',
    url: 'https://example.com',
  },
  {
    name: 'Методические рекомендации',
    type: 'teacher',
    url: 'https://example.com',
  },
  {
    name: 'Заявление на поступление в детский сад',
    type: 'parents',
    url: 'https://example.com',
  },
  {
    name: 'Список необходимых документов для поступления в детский сад',
    type: 'parents',
    url: 'https://example.com',
  },
  {
    name: 'Договор о предоставлении услуг детского сада',
    type: 'parents',
    url: 'https://example.com',
  },
];

const Documents = () => {
  const [activeType, setActiveType] = useState('admin');

  const handleTypeClick = (type) => {
    setActiveType(type);
  };

  const filteredDocuments = documents.filter((doc) => doc.type === activeType);

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center">Документы</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item
              active={activeType === 'admin'}
              onClick={() => handleTypeClick('admin')}
            >
              Административные документы
            </ListGroup.Item>
            <ListGroup.Item
              active={activeType === 'teacher'}
              onClick={() => handleTypeClick('teacher')}
            >
              Педагогические документы
            </ListGroup.Item>
            <ListGroup.Item
              active={activeType === 'parents'}
              onClick={() => handleTypeClick('parents')}
            >
              Документы для родителей
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        {filteredDocuments.map((doc, index) => (
          <Col key={index} md={4} className="my-3">
            <Card>
              <Card.Body>
                <Card.Title>{doc.name}</Card.Title>
                <Button variant="primary" href={doc.url} target="_blank">
                  Скачать
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Documents;