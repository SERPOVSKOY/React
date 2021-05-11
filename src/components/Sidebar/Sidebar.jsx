import React from 'react';
import s from './sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <ul className={s.menu}>
        <li>Главная</li>
        <li>Сообщения</li>
        <li>Новости</li>
        <li>Друзья</li>
      </ul>
    </div>
  );
};

export default Sidebar;
