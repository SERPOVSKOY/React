import React from 'react';
import s from './profile-info.module.css';

const ProfileInfo = (propss) => {
    console.log(propss);
    return (
        <div className={s.info}>Информация о пользователе</div>
    )
};

export default ProfileInfo;
