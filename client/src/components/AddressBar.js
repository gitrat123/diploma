import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Button, Row, Col } from 'react-bootstrap';

const AddressBar = observer(() => {
  const { group } = useContext(Context);

  const handleAddressClick = (address) => {
    group.setSelectedAddress(address);
  };

  return (
    <Row className="d-flex align-items-center mt-3">
      <Col className="d-flex">
        {group.addresses &&
          group.addresses.map((address) => (
            <Button
              key={address.id}
              className="m-1"
              onClick={() => handleAddressClick(address)}
              variant={
                address.id === group.selectedAddress.id ? 'danger' : 'light'
              }
              style={{
                fontSize: '20px',
                backgroundColor:
                  address.id === group.selectedAddress.id
                    ? '#dc3545'
                    : '#f8f9fa',
                color: address.id === group.selectedAddress.id ? '#fff' : '#212529',
              }}
            >
              {address.address}
            </Button>
          ))}
      </Col>
    </Row>
  );
});

export default AddressBar;
