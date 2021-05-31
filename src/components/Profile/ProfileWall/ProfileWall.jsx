import React from 'react';
import Post from '../../Post/Post';
import s from './profile-wall.module.css';

const ProfileWall = () => {
    return (
        <div className={s.wall}>
        <p className={s.tyt}>Стена</p>
        <input type="text" className={s.input} placeholder="Введите текст"/>
        < Post message="Привет! Я изобрел новую ракету на которой можно улететь на луну! Полетишь?"/>
        <hr className={s.lol}/>
        < Post message="Болит живот ребята. Я в школу не пойду"/>
        <hr className={s.lol}/>
        < Post message="Я в школе суп не ем! И не заставляйте!"/>
        <hr className={s.lol}/>
        < Post message="Последний пост"/>
        </div>
    )
};

export default ProfileWall;
