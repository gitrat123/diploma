import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '..';
import { getBasket } from '../http/basketAPI';
import { Card, Col, Container, Row, Form, Table } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const Basket = observer(() => {
  const { group } = useContext(Context);
  const [selectedChild, setSelectedChild] = useState(null);

  useEffect(() => {
    getBasket().then((data) => group.setBaskets(data));
  }, []);

  const handleChildSelect = (event) => {
    setSelectedChild(event.target.value);
  };

  const sortedBaskets = [...group.baskets].sort((a, b) =>
    a.groupName.localeCompare(b.groupName)
  );

  const filteredBaskets = selectedChild
    ? sortedBaskets.filter((basket) => basket.childId === selectedChild)
    : sortedBaskets;

    return (
        <Container
          className="d-flex flex-column justify-content-center align-items-center mt-3"
        >
          {group.baskets && (
            <>
              <Row className="align-items-center mb-3">
                <Col>
                  <h3>Показывать для:</h3>
                </Col>
                <Col xs="auto">
                  <Form.Select value={selectedChild} onChange={handleChildSelect}>
                    <option value="">Выберите ребёнка</option>
                    {group.children.map((child) => (
                      <option key={child.id} value={child.id}>
                        {child.name}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>
              <hr />
              <Card className="w-75">
                <Table striped bordered hover size="sm" className="mt-3">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th onClick={() => group.setSortBy('name')}>Название группы</th>
                      <th>Тип группы</th>
                      <th>Адрес</th>
                      <th>Учитель</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBaskets.map((basket, index) => (
                      <tr key={basket.id} onClick={() => group.setSelectedGroup(basket)}>
                        <td>{index + 1}</td>
                        <td>{basket.groupName}</td>
                        <td>{basket.groupType}</td>
                        <td>{basket.address}</td>
                        <td>{basket.teacher}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </>
          )}
        </Container>
      );
      
});

export default Basket;
