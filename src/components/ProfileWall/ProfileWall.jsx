import React from 'react';
import Post from '../Post/Post';
import s from './profile-wall.module.css';

const ProfileWall = () => {
    return (
        <div className={s.wall}>
            <p>Стена</p>
            <Post message="Привет мир" />
            <Post message="Пока мир" />
            <Post message="Новый пост" />
            <Post message="Последний пост" />
        </div>
    )
};

export default ProfileWall;
