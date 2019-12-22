import React from 'react';
import AvatarComponent from '../avatarComponent/AvatarComponent';
import FriendListComponent from '../FriendListComponent/FriendListComponent';
import UserInfoComponent from '../UserInfoComponent/UserInfoComponent';
import './MainPageComponent.css';

function Page() {
  return (
    <div className="page">
      <div class="head">
          <h2 class="header">Catbook</h2>
      </div>

      <div class="body">
        <div class="user-page">
          <div class="user-page_top">
            <AvatarComponent
              url={"http://memesmix.net/media/created/250/eni36e.jpg"}
            />
            <UserInfoComponent
              user={{
                firstname: 'Борис',
                lastname: 'Кот',
                status: [
                  'Я полон энергии', 
                  'На когтеточке', 
                  'Хозяин перевернул мою миску, я перевернул его дом'
                ],
                interests: [
                  'Валерианка',
                  'Кошачий корм',
                  'http://www.cat-tube.ru/uploads/posts/2013-04/1367217672_670058.jpeg'
                ]
            }} />
          </div>
          <FriendListComponent
            friends={{
              photos: [
                'https://avatars.mds.yandex.net/get-znatoki/880589/2a0000016cc1781e7ae7c7ebdbafa1dc53aa/orig',
                'https://www.meme-arsenal.com/memes/6e3283d133e739593d86bec5cac68346.jpg',
                'https://24tv.ua/resources/photos/news/610x344_DIR/201905/1154587.jpg?201905183220'
              ]
            }}
            />
        </div>
      </div>
    </div>
  );
}

export default Page;
