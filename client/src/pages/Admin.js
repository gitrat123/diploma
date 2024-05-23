import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateTeacher from '../components/modals/CreateTeacher';
import CreateGroup from '../components/modals/CreateGroup';
import CreateSchedule from '../components/modals/CreateSchedule';

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [scheduleVisible, setScheduleVisible] = useState(false)
    const [groupVisible, setGroupVisible] = useState(false)
    const [teacherVisible, setTeacherVisible] = useState(false)

    return(
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-4 p-3' onClick={() => setTypeVisible(true)}>
                Добавить тип
            </Button>
            <Button variant={'outline-dark'} className='mt-4 p-3' onClick={() => setScheduleVisible(true)}>
                Добавить расписание
            </Button>
            <Button variant={'outline-dark'} className='mt-4 p-3' onClick={() => setTeacherVisible(true)}>
                Добавить учителя
            </Button>
            <Button variant={'outline-dark'} className='mt-4 p-3' onClick={() => setGroupVisible(true)}>
                Добавить группу
            </Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateSchedule show={scheduleVisible} onHide={() => setScheduleVisible(false)}/>
            <CreateTeacher show={teacherVisible} onHide={() => setTeacherVisible(false)}/>
            <CreateGroup show={groupVisible} onHide={() => setGroupVisible(false)}/>
        </Container>
    );
};

export default Admin;