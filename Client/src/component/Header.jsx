import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import logo from "../assets/TLogo.svg";
import NavigationLinks from "./NavigationLinks";
import menu from "../pages/assets/Menu.svg";
import chat from "../pages/assets/Chat.svg";
import Bell from "../assets/Bell.svg";
import { json, useNavigate } from "react-router-dom";
import picsImport from "../assets/Avatar picture.svg";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import User from "../assets/User.svg";
import setting from "../assets/Setting_alt_line.svg";
import Headphones from "../assets/Headphones_fill.svg";
import Sign_out from "../assets/Sign_out_squre.svg";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import NotificationMark from "./notificationMark";
import API_URL from "./API_URL";
import axios from "axios";
import { Button, Modal } from "antd";
import { Avatar, Badge, Space, Switch } from "antd";
import { message } from "antd";
// import { Mentorship } from "../assets/mentorship-landingPage.svg";
import headerMentorship from "../assets/headerMentorship.svg";

const Header = () => {
  return (
    <>
      <div className={style.header}>
        <h1 className={style.header_line1}>We Empower Developers Through</h1>
        <div className={style.header_line2}>
          <div className={style.collaboration_and_mentorship}>
            <div className={style.collaboration}>
              <h2>Collaboration</h2>
              <h3> &</h3>
            </div>
            <div className={style.mentorship}>
              <img src={headerMentorship} alt="wow" />
              <h3>Mentorship</h3>
            </div>
          </div>

          <p>
            Join a dynamic platform that connects developers with skilled
            mentors for collaborative projects.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
