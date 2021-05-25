import React from 'react';
import s from './post.module.css';
import avatar from './avatar.jpg';

const Post = (props) => {
    return (
        <div>
            <img src={avatar} alt="avatar" className={s.avatar} />
            <p>{props.message}</p>
            <div>{props.time}</div>
        </div>
    )
};

export default Post;
