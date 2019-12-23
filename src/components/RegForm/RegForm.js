import React from 'react';
import './RegForm.css';

class RegFormComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      samePass: null
    };
  }

  goLogin() {
    document.location.href="/login"
  }

  checkPasswords() {
    if((document.getElementById("pass1")).value == (document.getElementById("pass2")).value) {
      this.setState({samePass: true})
    } else {
      this.setState({samePass: false})
    }
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
                  <input type="password" id="pass1"></input>
                  <div className="form-label check-password">
                    Повторите пароль:
                    {this.state.samePass == false &&
                      <div className="password-fail">
                        Пароли должны совпадать
                      </div>
                    }
                    {this.state.samePass == true &&
                      <div className="password-success">
                        Пароли совпадают
                      </div>
                    }
                  </div>
                  <input type="password" id="pass2" onChange={this.checkPasswords.bind(this)}></input>
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
