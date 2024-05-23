import React, { useState, useContext } from 'react';
import { Context } from '../../index';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addChildToUser } from '../../http/childAPI';
import { observer } from 'mobx-react-lite';

const AddChildModal = observer(({ show, onHide, handleClose, user }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [age, setAge] = useState('');

  const addChild = () => {
    if (!user) {
      return;
    }
    addChildToUser(user.id, { name, surname, patronymic, age }).then((data) => {
      user.setUserChildren([...user.userChildren, data]);
      onHide();
    });
  };
  

  return (
    <Modal
      size="lg"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить ребёнка
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Имя"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Фамилия"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              value={patronymic}
              onChange={(e) => setPatronymic(e.target.value)}
              placeholder="Отчество"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Возраст"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleClose}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addChild}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default AddChildModal;
