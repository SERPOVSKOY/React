import React from 'react';
import s from './post.module.css';
import avatar from './avatar.jpg'

const Post = (props) => {

import avatar from './avatar.jpg';

const Post = (props) => {
    return (
        <div>
            <img src={avatar} alt="avatar" className={s.avatar} />
            <p>{props.message}</p>
        </div>

    )
};

export default Post;

export default Post;

