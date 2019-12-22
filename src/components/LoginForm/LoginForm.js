import React from 'react';
import './LoginForm.css';

class LoginFormComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    goReg() {
        document.location.href="/register"
    }

    goMain() {
        document.location.href="/page"
    }

    render() {
        return (
            <div className="page">
                <div className="form">
                    <div className="form-title">Авторизация</div>
                    <div className="form-page login-form-page">
                        <div className="login-data">
                            <div className="form-label login-label">Имя пользователя(логин):</div>
                            <input className="login-input" type="text"></input>
                        </div>
                        <div className="login-data">
                            <div className="form-label login-label">Пароль:</div>
                            <input className="login-input" type="password"></input>
                        </div>
                        
                    </div>
                    <div className="login-placement_buttons">
                        <div className="form-button form-button_mini" onClick={this.goReg}>
                            Регистрация
                        </div>
                        <div className="form-button form-button_mini" onClick={this.goMain}>
                            Вход
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginFormComp;
