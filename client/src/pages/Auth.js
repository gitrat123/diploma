import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { registration, login } from '../http/userAPI';

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const selectFile = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('surname', surname);
        formData.append('patronymic', patronymic);
        formData.append('email', email);
        formData.append('password', password);
        if (profilePicture) {
          formData.append('img', profilePicture);
        }
        formData.append('role', 'USER');
        data = await registration(formData);
      }
      user.updateStoreFromToken(data.token);
      navigate(SHOP_ROUTE);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="text-center mb-4">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mb-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mb-3"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          {!isLogin && (
            <>
              <Form.Control
                className="mb-3"
                placeholder="Введите ваше имя..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control
                className="mb-3"
                placeholder="Введите вашу фамилию..."
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <Form.Control
                className="mb-3"
                placeholder="Введите ваше отчество..."
                value={patronymic}
                onChange={(e) => setPatronymic(e.target.value)}
              />
              <Form.Control
                className="mb-3"
                placeholder="Выберите фото профиля..."
                type="file"
                onChange={selectFile}
              />
            </>
          )}
          <Row className="mt-auto align-items-center">
            {isLogin ? (
              <Col>
                <div className="d-flex justify-content-start">
                  <NavLink to={REGISTRATION_ROUTE}>Нет аккаунта? Зарегистрируйтесь!</NavLink>
                </div>
              </Col>
            ) : (
              <Col>
                <div className="d-flex justify-content-start">
                  <NavLink to={LOGIN_ROUTE}>Есть аккаунт? Войдите!</NavLink>
                </div>
              </Col>
            )}
            <Col className="d-flex justify-content-end">
              <Button variant="outline-success" onClick={click}>
                {isLogin ? 'Войти' : 'Зарегистрироваться'}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
