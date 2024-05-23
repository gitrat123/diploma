import React, { useEffect, useState } from 'react';
import {Card, Col, Container, Row, Button, Image} from "react-bootstrap";
import bigstar from "../assets/bigstar.png";
import { useParams } from 'react-router-dom';
import { fetchOneGroup } from '../http/groupAPI';

const GroupPage = () => {

    const [group, setGroup] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneGroup(id).then(data => setGroup(data))
    }, [])

    return(
        <Container>
            <Row className="mt-5">
                <Col md={4}>
                    <Image className="img-fluid rounded" src={process.env.REACT_APP_API_URL + group.img}/>
                </Col>
                <Col md={4} className="d-flex flex-column align-items-center justify-content-center">
                    <h2 className="text-primary mb-4">{group.name}</h2>
                    <div
                        className="d-flex align-items-center justify-content-center"
                        style={{background: `url(${bigstar}) no-repeat center center`, width:240, height:240, backgroundSize: 'cover', fontSize: 64}}
                    >
                        {group.rating}
                    </div>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around p-5"
                        style={{width:300, height:300, fontSize:32, border: "5px solid lightgray"}}
                    >
                        <h3>Расписание</h3>
                        <Button variant="outline-dark" size="lg">Записаться</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1 className="mb-4">Описание</h1>
                {group.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        <h5>{info.title}:</h5> <p>{info.description}</p>
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default GroupPage;
