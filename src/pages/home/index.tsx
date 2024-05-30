import React from "react";

import { Flex, Divider, Card, Image, Carousel, Layout } from "antd";

const contentStyle: React.CSSProperties = {
  margin: "auto",
  height: "380px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  top: 0,
};
const { Meta } = Card;
const content = [
  {
    key: "1",
    content: (
      <Image
        src="./web/team.jpg"
        height={380}
        style={{ alignItems: "center" }}
      />
    ),
  },
  {
    key: "2",
    content: <h2 style={contentStyle}>Slide Title 2</h2>,
  },
  {
    key: "3",
    content: <p style={contentStyle}>Slide Description 3</p>,
  },
];
export default function HomeIndex() {
  return (
    <Layout
      
    
    >
      <Flex style={{ flex: 1 }} vertical>
        <Flex style={{justifyContent:"center"}}>
          <text
            style={{
              fontFamily: "Cochin",
              fontSize: 35,
              color: "brown",
              textAlign: "center",
              fontWeight: "bold",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            Welcome to scan sign
          </text>
        </Flex>
        <Flex
          style={{
            alignSelf: "center",
            flex: 1,
            flexWrap: "wrap",
            width: "70%",
          }}
        >
          <text
            style={{
              fontSize: 20,
              color: "darkblue",
              textAlign: "left",
              paddingTop: 20,
              flexWrap: "wrap",
            }}
          >
            Unlimited connecting Boundless, limitless,your trustworthy gateway
            to the world,where information flows without barriers and assets are
            interconnected seamlessly. Unlimited connecting, making the world
            pulse at your fingertips.
          </text>
        </Flex>
      </Flex>
      <Divider />
      {/* <SafeAreaView style={{ flex: 2, flexDirection: "row",paddingTop:20 }}> */}
      <Flex justify="center" gap="large" style={{ width: "100%" }} wrap="wrap">
        <Flex>
          <Card
            hoverable //鼠标移过时可浮起
            style={{ width: 380 }}
            cover={<img alt="example" src="./web/team.jpg" />}
          >
            <Meta title="our team" description="this is our team members." />
          </Card>
        </Flex>
        <Flex>
          <Card
            hoverable //鼠标移过时可浮起
            style={{ width: 380 }}
            cover={<img alt="example" src="./web/team.jpg" />}
          >
            <Meta title="our team" description="this is our team members." />
          </Card>
        </Flex>
      </Flex>
      <Divider />
      <Flex
        style={{ width: "95%", alignSelf: "center", flexDirection: "column" }}
      >
        <Flex
          style={{
            flexWrap: "wrap",
            flex: 1,
            //flexDirection: "row",
            alignSelf: "flex-start",
          }}
        >
          <text style={{ fontSize: 30, textAlign: "left", color: "#0047FF" }}>
            Our News
          </text>
        </Flex>
        <Flex
          justify="flex-start"
          gap="small"
          style={{ width: "100%" }}
          wrap="wrap"
        >
          <Card
            hoverable //鼠标移过时可浮起
            style={{ width: 380 }}
            cover={<img alt="example" src="./web/fellows.jpg" />}
          >
            <Meta
              title="office"
              description="we work in a clean and passionate office."
            />
          </Card>

          <Card
            hoverable //鼠标移过时可浮起
            style={{ width: 380 }}
            cover={<img alt="example" src="./web/fellows.jpg" />}
          >
            <Meta
              title="office"
              description="we work in a clean and passionate office."
            />
          </Card>

          <Card
            hoverable //鼠标移过时可浮起
            style={{ width: 380 }}
            cover={<img alt="example" src="./web/fellows.jpg" />}
          >
            <Meta
              title="office"
              description="we work in a clean and passionate office."
            />
          </Card>
          <Card
            hoverable //鼠标移过时可浮起
            style={{ width: 380 }}
            cover={<img alt="example" src="./web/fellows.jpg" />}
          >
            <Meta
              title="office"
              description="we work in a clean and passionate office."
            />
          </Card>
        </Flex>
      </Flex>
      <Divider />
      <div
        style={{
          backgroundColor: "black",
          alignSelf: "center",
          height: 400,
          width: 450,
        }}
      >
        <Carousel
          arrows
          infinite
          fade
          autoplay
          autoplaySpeed={3000}
          dotPosition={"bottom"}
        >
          {content.map((item) => (
            <Flex style={{ justifyContent: "center" }} key={item.key}>
              {item.content}
            </Flex>
          ))}
        </Carousel>
      </div>
    </Layout>
  );
}
