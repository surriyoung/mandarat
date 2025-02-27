import React from "react";

const UserList = ({ profileImage, nickname }) => {
  return (
    <div className="user-item">
      <div className="profile-image-wrapper">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <div className="nickname-text">{nickname}</div>
    </div>
  );
};

export default UserList;
