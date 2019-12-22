import React from 'react';
import './FriendListComponent.css';
import $ from 'jquery';

class FriendListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
    }
    componentDidMount() {
        $.ajax({
            url: "/friends",
            headers: {
                "Access-Control-Allow-Origin": true
            },
            type: "GET",
            success: function(result) {
                console.log(result);
                result = JSON.parse(result);
                document.getElementById('img1').src = result.photos[0];
                document.getElementById('img2').src = result.photos[1];
                document.getElementById('img3').src = result.photos[2];
            },
            error: function(result) {
                debugger;
            }
        });
    }
    render () {
        return(
            <div class="friends">
                <h4>Друзья:</h4>
                <div class="friend-container">
                    <img id="img1" class="friend-photo"/>
                    <span class="friend-name">
                        Барсик Волшебник
                    </span>
                </div>
                <div class="friend-container">
                    <img id="img2" class="friend-photo"/>
                    <span class="friend-name">
                        Мурка
                    </span>
                </div>
                <div class="friend-container">
                    <img id="img3" class="friend-photo"/>
                    <span class="friend-name">
                        Пушок Грозный
                    </span>
                </div>
            </div>
        )
    }
}

export default FriendListComponent;