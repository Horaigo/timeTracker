import React from 'react';
import './RegForm.css';

class RegFormComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  goLogin() {
    document.location.href="/login"
  }

  render() {
    return (
      <div className="page">
          <div className="form">
              <div className="form-title">Регистрация</div>
              <div className="form-page">
                  <div className="form-label">Фамилия:</div>
                  <input type="text"></input>
                  <div className="form-label">Имя:</div>
                  <input type="text"></input>
                  <div className="form-label">Отчество:</div>
                  <input type="text"></input>
                  <div className="form-label">Логин:</div>
                  <input type="text"></input>
                  <div className="form-label">Пароль:</div>
                  <input type="password"></input>
                  <div className="form-label">Повторите пароль:</div>
                  <input type="password"></input>
              </div>
              <div className="form-button" onClick={this.goLogin}>
                  Зарегистрироваться
              </div>
          </div>
      </div>
    );
  }
}

export default RegFormComp;
