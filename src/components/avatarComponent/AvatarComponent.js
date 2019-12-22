import React from 'react';
import './AvatarComponent.css';

function AvatarComponent(props) {
    return (
        <div class="photo-container">
            <img class="photo" src={props.url} />
        </div>
    )
}

export default AvatarComponent;