import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const CreateTeacher = ({show, onHide}) =>{
    return(
    <Modal
      size="lg"
      centered
      show = {show}
      onHide = {onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить учителя
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control placeholder = {"Имя"}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder = {"Фамилия"}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder = {"Отчество"}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder = {"E-mail"}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder = {"Номер телефона"}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default CreateTeacher;
