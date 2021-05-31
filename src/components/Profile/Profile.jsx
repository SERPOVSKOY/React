import React from 'react';
import ProfileCard from './ProfileCard/ProfileCard';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileWall from './ProfileWall/ProfileWall';
import s from './profile.module.css';

const Profile = () => {
  return (
    <>
        <div className={s.profileMain}>
          <ProfileCard />
          <ProfileInfo />
        </div>
        <ProfileWall />
    </>
  );
};

export default Profile;
