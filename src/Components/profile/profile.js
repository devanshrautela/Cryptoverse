import React, { useState } from "react";
import Header from "../header/header";
import { Avatar } from "@mui/material";
import "./profile.css";
import profile_pic from "../samples/images/profile_pic.jpeg";
import SettingsIcon from "@mui/icons-material/Settings";
import Post from "../post/post";

const Profile = () => {

  return (
    <div>
      <Header />
      <div className="profile">
        <div className="profile-top">
          <Avatar src={profile_pic} sx={{ width: 150, height: 150 }} />
          <div className="profile-details">
            <h2>Devansh Rautela</h2>
            <p>They/Them</p>
          </div>
          <button className="edit">Edit Profile</button>
          <SettingsIcon
            sx={{ width: 34, height: 34, pb: 3.5 }}
            className="setting"
          />
        </div>
        <div className="user-posts">
            <Post />
        </div>
      </div>
    </div>
  );
};

export default Profile;
