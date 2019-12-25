import React from 'react';
import './LoginForm.css';
import config from '../../config';

class LoginFormComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    goReg() {
        document.location.href="/register"
    }

    async goMain() {
        var
            login = (document.getElementById('login')).value,
            pass = (document.getElementById('pass')).value;
        if (login !== '' && pass !== '') {
            var user = {
                login: login,
                password: pass
            };
            let response = await fetch(config.serverUrl + '/login', {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(user)
            });
            let result = await response.json();
            if (result.result != "Wrong login / password") {
                document.cookie = "userOid = " + result._id.$oid
                document.location.href="/page"
            }
        }
    }

    render() {
        document.cookie = "userOid = ";
        return (
            <div className="page">
                <div className="form">
                    <div className="form-title">Авторизация</div>
                    <div className="form-page login-form-page">
                        <div className="login-data">
                            <div className="form-label login-label">Имя пользователя(логин):</div>
                            <input className="login-input" type="text" id="login"></input>
                        </div>
                        <div className="login-data">
                            <div className="form-label login-label">Пароль:</div>
                            <input className="login-input" type="password" id="pass"></input>
                        </div>
                        
                    </div>
                    <div className="login-placement_buttons">
                        <div className="form-button form-button_mini" onClick={this.goReg}>
                            Регистрация
                        </div>
                        <div className="form-button form-button_mini" onClick={this.goMain.bind(this)}>
                            Вход
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginFormComp;
