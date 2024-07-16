import { Tag, type MenuProps } from "antd";
import { Card, Flex, Layout, Menu, theme, Image } from "antd";
import React, { useState } from "react";
import {
  ShoppingCartOutlined,
  MailOutlined,
  PhoneTwoTone,
  HomeOutlined,
  ReadOutlined,
  TeamOutlined,
  ForkOutlined
} from "@ant-design/icons";
import HomeIndex from "./home/index";
import TeamIndex from "./team/index";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import NewsTemplate from "./components/newstemplate";
import RoadmapIndex from "./roadmap";
import BlogIndex from "./blog";
import ContactIndex from "./contact";
import SolarPanelPage from "./products/solarpanel";
import LightsPage from "./products/lights";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Home",
    key: "/Home",
    icon: <HomeOutlined style={{ fontSize: "25px", color: "skyblue" }} />,
  },

  {
    label: "Products",
    key: "/Products",
    icon: (
      <ShoppingCartOutlined style={{ fontSize: "25px", color: "skyblue" }} />
    ),
    children: [
      {
        //type: "group",
        label: "Solar Panel",
        key: "/Products/SolarPanel",
        /* children: [
          { label: "Option 1", key: "setting:1" },
          { label: "Option 2", key: "setting:2" },
        ], */
      },
      {
        //type: "group",
        label: "Lights",
        key: "/Products/Lights",
        /*  children: [
          { label: "Option 3", key: "setting:3" },
          { label: "Option 4", key: "setting:4" },
        ], */
      },
    ],
  },
  {
    key: "team",
    label: "Team",
    icon: <TeamOutlined style={{ fontSize: "25px", color: "skyblue" }} />,
    /* label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Contact Us
      </a>
    ), */
  },
  {
    key: "roadmap",
    label: "Roadmap",
    icon: <ForkOutlined style={{ fontSize: "25px", color: "skyblue" }} />,
    /* label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Contact Us
      </a>
    ), */
  },
  {
    key: "blog",
    label: "Blog",
    icon: <ReadOutlined style={{ fontSize: "25px", color: "skyblue" }} />,
    /* label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Contact Us
      </a>
    ), */
  },
  
  {
    key: "Contact",
    label: "Contact Us",
    icon: <MailOutlined style={{ fontSize: "25px", color: "skyblue" }} />,
    /* label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Contact Us
      </a>
    ), */
  },
];
export default function Main() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { Header, Content, Footer } = Layout;
  const [current, setCurrent] = useState("mail");

  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    navigate(e.key, { replace: true });
    setCurrent(e.key);
  };

  return (
    <Layout >
      <Flex
        style={{ padding: 0, backgroundColor: "black", flexDirection: "row" }}
      >
        <Image width={"15%"} src="./application/webtop-home.png" preview={false} />
        <Flex vertical style={{ width: "85%" }}>
          <Flex style={{ flex: 1, alignItems: "flex-end", backgroundColor:"purple"}}>    
          <div></div>  
          </Flex>
          <Menu
            style={{ flex: 1}}
            onClick={onClick}
            selectedKeys={[current]}
            defaultOpenKeys={[current]}
            mode="horizontal"
            theme="dark"
            items={items}
          />
        </Flex>
      </Flex>
      <Flex>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />}></Route>
          <Route path="/Home" element={<HomeIndex />} />
          <Route path="/Products/SolarPanel" element={<SolarPanelPage />} />
          <Route path="/Products/Lights" element={<LightsPage />} />
          <Route path="/Team" element={<TeamIndex />} />
          <Route path="/Roadmap" element={<RoadmapIndex />} />
          <Route path="/Blog" element={<BlogIndex />} />
          <Route path="/Contact" element={<ContactIndex />} />          
          <Route path="/News/:newsid" element={<NewsTemplate/>} />
          <Route path="/Blog/:newsid" element={<NewsTemplate/>} />
        </Routes>
      </Flex>
      <Footer style={{ textAlign: "center" }}>
        Scan Sign Design ©{new Date().getFullYear()} Created by Moukey
      </Footer>
    </Layout>
  );
}
