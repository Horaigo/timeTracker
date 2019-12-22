import React from 'react';
import './LoginComponent.css';
import {
    Link
} from "react-router-dom";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        var resultObject = {
            email: this.state.email,
            password: this.state.password
        };
        fetch('/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(resultObject)
        });
    }

    render() {
        return (
            <div>
                <form id="auth" class="login" action="/login" method="post">
                    <p>
                        <label for="login">Логин:</label>
                        <input type="text" name="email" id="login" onChange={this.handleChange}/>
                    </p>
        
                    <p>
                        <label for="password">Пароль:</label>
                        <input type="password" name="password" id="password" onChange={this.handleChange}/>
                    </p>
        
                    <p>
                        <input type="submit" class="login-submit"/>
                    </p>
                    <Link to="/registration">Регистрация</Link>
                </form>
            </div>
          );
    }
}

export default LoginPage;