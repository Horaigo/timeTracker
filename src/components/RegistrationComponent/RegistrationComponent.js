import React from 'react';
import './RegistrationComponent.css';

function Registration() {
  return (
    <form id="auth" class="login" action="/registration" method="post">
        <div class="nice_label">
                Регистрация:
        </div>
        <div>
            <div class="sublabel">Имя:</div>
            <input type="text" class="textfield" id="name" name="firstName"/>
        </div>
        <div>
            <div class="sublabel">Фамилия:</div>
            <input type="text" class="textfield" id="lastname" name="lastName"/>
        </div>
        <div>
            <div class="sublabel">Email:</div>
            <input type="text" class="textfield" id="email" name="email"/>
        </div>
        <div>
            <div class="sublabel">Пароль:</div>
            <input type="password" class="textfield" id="password" name="password"/>
        </div>
        <div>
            <input type="submit" class="button"/>
        </div>
    </form>
  );
}

export default Registration;
