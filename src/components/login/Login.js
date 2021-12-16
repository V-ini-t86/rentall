import React from "react";
import { IconButton } from "@mui/material";
import styled from "@mui/styled-engine";
const Logo = "images/logo.png";
const ImgLogo = styled("img")({
  height: "60px",
  width: "60px",
});
const MT = styled("div")({
  margin: "20px 0px",
});
function Login() {
  return (
    <MT>
      <IconButton>
        <ImgLogo src={Logo} alt="logo" />
      </IconButton>
    </MT>
  );
}

export default Login;
