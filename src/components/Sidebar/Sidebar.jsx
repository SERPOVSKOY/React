import React from 'react';
import s from './sidebar.module.css';

const Sidebar = () => {
  let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Пончик", "Пирожное"]
 };
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
