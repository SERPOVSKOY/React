import React from 'react';
import s from './profile-card.module.css';

const ProfileCard = () => {
    return (
        <div className={s.card} >
            <img src="man.png" alt="" className="image" />
            Иван Иванов
        </div>

    )
};

export default ProfileCard;
