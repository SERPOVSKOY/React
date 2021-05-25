import React from 'react';
import s from './profile-info.module.css';

const ProfileInfo = (propss) => {
    console.log(propss);
    return (
    <div className={s.info}>
        <p className={s.joj}>Иван Иванов</p>
        <p>Возраст: 14лет</p>
        <p>Город: Тверь</p>
        <p>Образование: Программсит станков по изготовке киндоров</p>
        <p>О себе: Умный, Красивый ну прям жаних!</p>
    </div>
        
    )
};

export default ProfileInfo;
