import React from 'react';
import './UserInfoComponent.css';

function UserInfoComponent(props) {
    return (
        <div class="user-info">
            <div class="fio">
                <h3>{props.user.lastname + ' ' + props.user.firstname}</h3>
            </div>
            <div class="status">
                <h4>
                    Статус:
                </h4>
                <select class="status-combobox">
                    <option>{props.user.status[0]}</option>
                    <option>{props.user.status[1]}</option>
                    <option>{props.user.status[2]}</option>
                </select>
            </div>
            <div class="interests">
                <h4>Интересы:</h4>
                <ul>
                    <li>{props.user.interests[0]}</li>
                    <li>{props.user.interests[1]}</li>
                    <li>Бар "<a href={props.user.interests[2]}>Тапок</a>"</li>
                </ul>
            </div>
        </div>
    )
}

export default UserInfoComponent;