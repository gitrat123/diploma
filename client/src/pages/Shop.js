import React, { useContext, useEffect } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import TypeBar from '../components/TypeBar';
import AddressBar from '../components/AddressBar';
import GroupList from '../components/GroupList';
import Pages from '../components/Pages';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchTypes, fetchGroups, fetchAddresses } from '../http/groupAPI';

const Shop = observer(() => {
    const {group} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => group.setTypes(data))
        fetchAddresses().then(data => group.setAddresses(data))
        fetchGroups(null, null, 1, 3).then(data => {
            group.setGroups(data.rows)
            group.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchGroups(group.selectedType.id, group.selectedAddress.id, group.page, 2).then(data => {
            group.setGroups(data.rows)
            group.setTotalCount(data.count)
        })
    }, [group.page, group.selectedType, group.selectedBrand,])

    return(
        <Container>
            <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <AddressBar/>
                    <GroupList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;