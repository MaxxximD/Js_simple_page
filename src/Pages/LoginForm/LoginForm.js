import axios from "axios";
import { useState } from 'react';
import './LoginForm.css'
import { useNavigate } from "react-router-dom";

const Input = ({ placeholder, value, onChange, name, id, labelName }) => {
  return (
    <div className="formItem">
      <label>{labelName}</label>
      <input
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        autoComplete="off"
      />
    </div>
  );
};

const customInputHandler = (e, setFunction) => setFunction(e.target.value);

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login === '' || password === '') return alert('Заполните все поля!');
    if (login !== 'Admin' && password !== 12345)
      return alert('Данные введены неправильно!');

    localStorage.setItem('user', 'Admin');
    navigate('/profile');
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit} className="LoginForm" id="LoginForm">
      <Input
        placeholder="Введите логин"
        value={login}
        onChange={(e) => customInputHandler(e, setLogin)}
        name="loginInput"
        id="loginInput"
        labelName="Логин"
      />
      <Input
        placeholder="Введите пароль"
        value={password}
        onChange={(e) => customInputHandler(e, setPassword)}
        name="passwordInput"
        id="passwordInput"
        labelName="Пароль"
      />
      <button className="loginButton" type="submit" form="LoginForm">
        Войти в профиль
      </button>
    </form>
    </div>
  );

};

export default LoginForm;