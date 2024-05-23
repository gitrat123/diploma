import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import {Context} from '../index';
import Row from 'react-bootstrap/esm/Row';
import GroupItem from './GroupItem';

const GroupList = observer(() => {
    const {group} = useContext(Context)
    return(
        <Row className='d-flex'>
            {group.groups.map(group =>
                <GroupItem key={group.id} group = {group}/>
            )}
        </Row>
    );
});

export default GroupList;