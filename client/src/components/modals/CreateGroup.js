import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Context } from '../../index';
import { Dropdown, Row } from 'react-bootstrap';
import { fetchTypes, fetchGroups, createGroup, fetchAddresses } from '../../http/groupAPI';
import { observer } from 'mobx-react-lite';

const CreateGroup = observer(({ show, onHide }) => {
    const {group} = useContext(Context)
    const [info, setInfo] = useState([])
    const [typeId, setTypeId] = useState(null)
    const [addressId, setAddressId] = useState(null)
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)

    useEffect(() => {
        fetchTypes().then(data => group.setTypes(data))
        fetchAddresses().then(data => group.setAddresses(data))
        fetchGroups().then(data => group.setGroups(data.rows))
    }, [])

    const addInfo = () =>{
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) =>{
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addGroup = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('img', file)
        formData.append('GroupTypeId', typeId)
        formData.append('GroupAddressId', addressId)
        formData.append('info', JSON.stringify(info))
        createGroup(formData).then(data => onHide())
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
                    Добавить группу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>
                            {group.selectedType.name || "Выберите тип"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {group.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => {
                                        group.setSelectedType(type)
                                        setTypeId(type.id)
                                    }}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>
                            {group.selectedAddress.address || "Выберите адрес"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {group.addresses.map(address =>
                                <Dropdown.Item
                                    onClick={() => {
                                        group.setSelectedAddress(address)
                                        setAddressId(address.id)
                                    }}
                                    key={address.id}
                                >
                                    {address.address}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        value={name}
                        className="mt-3"
                        placeholder="Название группы"
                        onChange={e => setName(e.target.value)}
                    />

                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />

                    <Button
                        className="mt-4"
                        variant="outline-dark"
                        onClick={addInfo}
                    >
                        Добавить описание
                    </Button>
                    {
                        info.map(i =>
                            <Row className="mt-4" key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.title}
                                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                        placeholder="Введите название свойства"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.description}
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                        placeholder="Введите описание свойства"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        onClick={() => removeInfo(i.number)}
                                        variant={"outline-danger"}
                                    >
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addGroup}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
})

export default CreateGroup;
