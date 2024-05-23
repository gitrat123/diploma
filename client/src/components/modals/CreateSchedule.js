import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { createSchedule } from '../../http/scheduleAPI';
import { fetchGroups } from '../../http/groupAPI';
import { Context } from '../../index';

const CreateSchedule = ({ show, onHide }) => {

  const {group} = useContext(Context)

  const [formValue, setFormValue] = useState({
    monday: 'Понедельник: 00:00 - 00:00',
    tuesday: 'Вторник: 00:00 - 00:00',
    wednesday: 'Среда: 00:00 - 00:00',
    thursday: 'Четверг: 00:00 - 00:00',
    friday: 'Пятница: 00:00 - 00:00'
  });

  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    fetchGroups(group.selectedType.id, group.selectedAddress.id, 1, 100).then(data => {
      setGroups(data.rows);
    });
  }, []);

  const handleInputChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  }

  const addSchedule = () => {
    const formData = new FormData()
    formData.append('monday_schedule', formValue.monday)
    formData.append('tuesday_schedule', formValue.tuesday)
    formData.append('wednesday_schedule', formValue.wednesday)
    formData.append('thursday_schedule', formValue.thursday)
    formData.append('friday_schedule', formValue.friday)
    if (selectedGroup) {
      formData.append('GroupId', selectedGroup);
    }
    createSchedule(formData).then(data => onHide())
  }

  return (
    <Modal
      size="lg"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить расписание
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicGroup">
            <Form.Label>Выберите группу</Form.Label>
            <Form.Control as="select" value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)}>
              <option>Выберите группу</option>
              {groups.map(group => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMonday">
            <Form.Control type="text" name="monday" value={formValue.monday} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTuesday">
            <Form.Control type="text" name="tuesday" value={formValue.tuesday} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicWednesday">
            <Form.Control type="text" name="wednesday" value={formValue.wednesday} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicThursday">
            <Form.Control type="text" name="thursday" value={formValue.thursday} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFriday">
            <Form.Control type="text" name="friday" value={formValue.friday} onChange={handleInputChange}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addSchedule}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateSchedule;
