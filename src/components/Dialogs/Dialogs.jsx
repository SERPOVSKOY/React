import React from 'react';
import s from './dialogs.module.css';
import { NavLink } from 'react-router-dom';

const ListItem = (props) => {
    return (
        <li className={s.listItem}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.activeLink}>{props.name}</NavLink>
        </li>
    );
}

const Dialogs = () => {
    return (
        <div className={s.container}>
            <div className={s.users}>
                <ul className={s.listUsers}>
                    <ListItem name="Вася Пупки" id="1" />
                    <ListItem name="Гарик Гудини" id="2" />
                    <ListItem name="Иголь Большеволосов" id="3" />
                    <ListItem name="Юрий Большеруков" id="4" />
                    <ListItem name="Таня Зюбеншнаузен" id="5" />
                </ul>
            </div>
            <div className={s.messages}>
                <h1>Сообщения</h1>
            </div>
        </div>

    )
};

export default Dialogs;
