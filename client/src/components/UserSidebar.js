import React, { useState, useEffect } from 'react';
import { Offcanvas, Stack, Row, Col, Image, Button } from 'react-bootstrap';
import userPic from '../assets/user.svg';
import AddChildModal from './modals/AddChild';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, BASKET_ROUTE } from '../utils/consts';

const UserSidebar = ({ show, onHide, logout, user }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    user.fetchUserChildren();
  }, [user]);

  return (
    <>
      <Offcanvas show={show} onHide={onHide} placement="end" style={{ width: '20vw' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Профиль</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={2} direction="horizontal" className="mb-3 align-items-center">
            <Image
              src={user.img ? process.env.REACT_APP_API_URL + `/static/${user.img}` : userPic}
              roundedCircle
              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
            />
            <div>
              <div>{`${user.name} ${user.surname} ${user.patronymic}`}</div>
              <div>{user.email}</div>
            </div>
          </Stack>
          <hr />
          <div className="child-list" style={{ height: '75vh', overflowY: 'auto' }}>
            {user.userChildren && user.userChildren.map((child, index) => (
              <div key={index} className="d-flex align-items-center child-item p-2"
              onMouseEnter={() => {
                    // добавить код для реакции при наведении
              }}
              onMouseLeave={() => {
                    // добавить код для реакции при уходе курсора
              }}
              onClick={() => {
              navigate(BASKET_ROUTE);
              onHide();
              }}
              >
              <div className="ms-2">
                <div>{`${child.name} ${child.surname} ${child.patronymic}`}</div>
                </div>
              </div>
            ))}
          </div>
          <hr />

          <Row className="mt-auto mb-3 justify-content-end" style={{ width: '100%' }}>
            {user.isAuth && (
              <Col xs="auto" className="d-flex" style={{ justifyContent: 'space-between' }}>
                {user.isAdmin && (
                  <Button
                    variant="outline-secondary"
                    className="mx-2"
                    onClick={() => {
                      navigate(ADMIN_ROUTE);
                      onHide();
                    }}
                    style={{ fontSize: '20px' }}
                  >
                    Админпанель
                  </Button>
                )}
                <Button
                  variant="outline-secondary"
                  className="mx-2 "
                  onClick={openModal}
                  style={{ fontSize: '20px' }}
                >
                  Добавить ребёнка
                </Button>
                <Button
                  variant="outline-danger"
                  className="mx-2"
                  onClick={logout}
                  style={{ fontSize: '20px' }}
                >
                  Выйти
                </Button>
              </Col>
            )}
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
      <AddChildModal show={showModal} handleClose={closeModal} user={user}/>
    </>
  );
};

export default UserSidebar;
