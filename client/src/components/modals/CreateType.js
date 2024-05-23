import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { createType } from '../../http/groupAPI';

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addType = () =>{
      createType({name: value}).then(data => {
        setValue('')
        onHide()
      })
    }

    return (
    <Modal
      size="lg"
      centered
      show = {show}
      onHide = {onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control placeholder = {"Название типа"} value={value} onChange={e => setValue(e.target.value)}/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addType}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default CreateType;