import React, { useState, useEffect } from "react";
import style from "./logIn.module.css";
import logo from "../assets/WhiteLogo.svg";
import Button from "../../component/CTA_Button";
import Input from "../../component/Input_Fields";
import withGithub from "../assets/withGithub.svg";
import withGoogle from "../assets/withGoogle.svg";
import withLinkdln from "../assets/withLinkdln.svg";
import API_URL from "../../component/API_URL";
import { Navigate, useNavigate } from "react-router-dom";
import Input_Password from "../../component/Input_password";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import NavBarLandingPage from "../../component/NavBarLandingPage";
import Header from "../../component/Header";
const landingPage = () => {
  const Navigate = useNavigate();

  return (
    <>
      <NavBarLandingPage>wow</NavBarLandingPage>
      <Header></Header>
    </>
  );
};

export default landingPage;
