import React from "react";
import styled from "styled-components";
import Layout, {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getCollapseBtn,
  getSidebarContent,
  getContent,
  getFooter,
} from "@mui-treasury/layout";
import { Toolbar, IconButton } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ImgLogo, Logo } from "../templates/templates";

const scheme = Layout();
const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const CollapseBtn = getCollapseBtn(styled);
const SidebarContent = getSidebarContent(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

scheme.configureHeader((builder) => {
  builder
    .registerConfig("xs", {
      position: "sticky",
    })
    .registerConfig("md", {
      position: "relative",
    });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("unique_id", { anchor: "left" })
    .registerTemporaryConfig("xs", {
      width: "auto",
    })
    .registerPermanentConfig("md", {
      width: 100,
      collapsible: true,
      collapseWidth: 64,
    });
});

function Home() {
  return (
    <Root scheme={scheme}>
      <CssBaseline />

      <Header>
        <Toolbar>
          <SidebarTrigger sidebarId={"unique_id"} />
          Home
        </Toolbar>
      </Header>
      <DrawerSidebar sidebarId={"unique_id"}>
        <SidebarContent>
          <IconButton>
            <ImgLogo src={Logo} alt="logo" />
          </IconButton>
        </SidebarContent>
        <CollapseBtn />
      </DrawerSidebar>
      <Content>
        <div style={{ marginLeft: "100px", marginTop: "100px" }}>
          fasdfasdsad
        </div>
        sadfasdlflkHelloda World
      </Content>
      <Footer>Footer</Footer>
    </Root>
  );
}

export default Home;
