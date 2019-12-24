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

  async goLogin() {
    var
      lastname = (document.getElementById('lastname')).value,
      firstname = (document.getElementById('firstname')).value,
      surname = (document.getElementById('surname')).value,
      login = (document.getElementById('login')).value,
      pass1 = (document.getElementById('pass1')).value;

    if (this.state.samePass === true) {
      if(lastname !== '' && firstname !== '' && login !== '' && pass1 !== '') {
        var user = {
          first_name: firstname,
          patronymic: surname,
          last_name: lastname,
          login: login,
          password: pass1
        };

        let response = await fetch('http://127.0.0.1:5000/register', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(user)
        });
        let result = await response.json();
        if(result.result === 'Successfull registered') {
          document.location.href="/login"
        } else {
          alert("Такой пользователь уже зарегистрирован")
        }
      }
    }
  }

  checkPasswords() {
    if((document.getElementById("pass1")).value === (document.getElementById("pass2")).value) {
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
                  <input type="text" id="lastname"></input>
                  <div className="form-label">Имя:</div>
                  <input type="text" id="firstname"></input>
                  <div className="form-label">Отчество:</div>
                  <input type="text" id="surname"></input>
                  <div className="form-label">Логин:</div>
                  <input type="text" id="login"></input>
                  <div className="form-label">Пароль:</div>
                  <input type="password" id="pass1"></input>
                  <div className="form-label check-password">
                    Повторите пароль:
                    {this.state.samePass === false &&
                      <div className="password-fail">
                        Пароли должны совпадать
                      </div>
                    }
                    {this.state.samePass === true &&
                      <div className="password-success">
                        Пароли совпадают
                      </div>
                    }
                  </div>
                  <input type="password" id="pass2" onChange={this.checkPasswords.bind(this)}></input>
              </div>
              <div className="form-button" onClick={this.goLogin.bind(this)}>
                  Зарегистрироваться
              </div>
          </div>
      </div>
    );
  }
}

export default RegFormComp;
