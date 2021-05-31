import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './sidebar.module.css';

const Sidebar = () => {

  return (
    <div className={s.sidebar}>
      <menu className={s.menu}>
        <NavLink to="/profile" activeClassName={s.sidebarActiveLink}>Главная</NavLink>
        <NavLink to="/dialogs" activeClassName={s.sidebarActiveLink}>Сообщения</NavLink>
        <NavLink to="/news" activeClassName={s.sidebarActiveLink}>Новости</NavLink>
        <NavLink to="/friend" activeClassName={s.sidebarActiveLink}>Друзья</NavLink>
      </menu>
    </div>
  );
};

export default Sidebar;
