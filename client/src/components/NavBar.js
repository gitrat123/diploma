import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, SHOP_ROUTE, ABOUT_ROUTE } from '../utils/consts';
import UserSidebar from './UserSidebar';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout = () => {
    user.setUser({});
    user.setIsAuth(false);
    user.setIsAdmin(false);
    setShow(false);
    localStorage.removeItem('token');
    navigate(LOGIN_ROUTE);
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expanded="lg">
        <Container>
          <NavLink to={SHOP_ROUTE} style={{ color: "white", textDecoration: "none", fontSize: '20px' }}>
            УчиДитё
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ color: "white" }}>

            <Button
              className="mx-2"
              variant="outline-light"
              onClick={() => navigate(ABOUT_ROUTE)}
              style={{ fontSize: '20px' }}
            >
              О нас
            </Button>

              {user.isAuth ? (
                <Button
                  variant="outline-light"
                  className="mx-2"
                  onClick={handleShow}
                  style={{ fontSize: '20px' }}
                >
                  Профиль
                </Button>
              ) : (
                <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)} style={{ fontSize: '20px' }}>
                  Авторизация
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <UserSidebar show={show} onHide={handleClose} logout={logout} user={user} />
    </>
  );
});

export default NavBar;
