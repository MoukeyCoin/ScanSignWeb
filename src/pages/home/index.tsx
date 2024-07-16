import React from "react";
import { Flex, Divider, Card, Image, Carousel, Layout } from "antd";
import { Typography } from "antd";
import { Link } from "react-router-dom";

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
        src="./web/home/team.jpg"
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
    <Layout>
      <Flex style={{ flex: 1 }} vertical>
        <Flex style={{ justifyContent: "center" }}>
          <Typography
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
          </Typography>
        </Flex>
        <Flex
          style={{
            alignSelf: "center",
            flex: 1,
            flexWrap: "wrap",
            width: "70%",
          }}
        >
          <Typography
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
          </Typography>
        </Flex>
        <Flex style={{ alignSelf: "center" }}>
          <Image src="./web/home/step.png" preview={false} />
        </Flex>
      </Flex>
      <Divider />
      {/* <SafeAreaView style={{ flex: 2, flexDirection: "row",paddingTop:20 }}> */}
      {/* <Flex justify="center" gap="large" style={{ width: "100%" }} wrap="wrap">
        <Flex>
          <Card
            hoverable //鼠标移过时可浮起
            style={{ width: 380 }}
            cover={<img alt="example" src="./web/home/team.jpg" />}
          >
            <Meta title="our team" description="this is our team members." />
          </Card>
        </Flex>
        <Flex>
          <Card
            hoverable //鼠标移过时可浮起
            style={{ width: 380 }}
            cover={<img alt="example" src="./web/home/team.jpg" />}
          >
            <Meta title="Revolutionizing Real Estate Development Financing with NFT-Backed Loans" />
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
          <Typography
            style={{ fontSize: 30, textAlign: "left", color: "#0047FF" }}
          >
            Our News
          </Typography>
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
            cover={<img alt="example" src="./web/home/fellows.jpg" />}
          >
            <Meta
              title="office"
              description="we work in a clean and passionate office."
            />
          </Card>

          <Card
            hoverable //鼠标移过时可浮起
            style={{ width: 380 }}
            cover={<img alt="example" src="./web/home/fellows.jpg" />}
          >
            <Meta
              title="office"
              description="we work in a clean and passionate office."
            />
          </Card>

          <Card
            hoverable //鼠标移过时可浮起
            style={{ width: 380 }}
            cover={<img alt="example" src="./web/home/fellows.jpg" />}
          >
            <Meta
              title="office"
              description="we work in a clean and passionate office."
            />
          </Card>
          <Card
            hoverable //鼠标移过时可浮起
            style={{ width: 380 }}
            cover={<img alt="example" src="./web/home/fellows.jpg" />}
          >
            <Meta
              title="office"
              description="we work in a clean and passionate office."
            />
          </Card>
        </Flex>
      </Flex> */}
      <Divider />
      {/* <div
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
      </div> */}
      <div style={{ width: "80%", alignSelf: "center" }}>
        <Typography style={{ fontSize: 40 }}>Outlining the problems</Typography>
        <Typography style={{ fontSize: 20 }}>
          Total global Real Estate was valued at over $378.7 trillion at the end
          of 2022 (Source: Savills article by Paul Torstevin). This eye watering
          sum remains the largest store of wealth across all sectors. Yet only
          1.1% of the global population own nearly half of the world’s total
          wealth (Source: Credit Suisse Global Wealth Databook 2021). Due to the
          complex nature of real estate and the traditional need for trusted
          intermediaries, many real estate investment opportunities are not
          possible for the average person.
        </Typography>
        <Typography style={{ fontSize: 20 }}>
          Nearly 40% of global carbon dioxide emissions come from the real
          estate sector (Source: Forbes article by David Carlin Apr 5, 2022).
          Approximately 70% are produced by building operations, while the
          remaining 30% comes from construction.
        </Typography>
        <Typography style={{ fontSize: 20 }}>
          An estimated 150 million people are homeless globally, though the real
          number is probably higher (Source: The World Economic Forum website
          article by Patrick Henry Oct 2021).
        </Typography>
        <Divider />
        <Flex>
          <Flex style={{ width: "60%" }} vertical>
            <Typography style={{ fontSize: 40 }}>The solution</Typography>
            <Typography style={{ fontSize: 20 }}>
              By aligning the interests of the small to medium sized real estate
              developer, the investor and the tenant we can bring value and
              control back in to the hands of the stakeholders.
            </Typography>
            <Typography style={{ fontSize: 20 }}>
              Xcavate aims to level the playing field through increasing capital
              and technical efficiency, reducing friction by automating and
              simplifying processes, and removing intermediaries. This is
              achieved by leveraging digital identity, dApps and oracles. The
              resulting protocol is transparent and auditable without requiring
              deep expertise, and brings trust-less accessibility and security
              to the real estate market.
            </Typography>
          </Flex>
          <Flex vertical style={{marginLeft:50,marginTop:20}}>
            <Typography style={{ fontSize: 25 }}>
              Advantage:
            </Typography>
            <Typography style={{ fontSize: 25 }}>
              Lending & asset tokenisation protocol
            </Typography>
            <Typography style={{ fontSize: 25 }}>
              Investor controlled real estate structure
            </Typography>
            <Typography style={{ fontSize: 25 }}>
              Decentralised & community controlled platform
            </Typography>
            <Typography style={{ fontSize: 25 }}>
              Lower fees, quicker settlement with greater liquidity
            </Typography>
          </Flex>
        </Flex>
        <Flex vertical={false} style={{ alignSelf: "center" }}>
          <Image src="./web/home/realestate.png" preview={false} style={{ width:"100%" }} />
        </Flex>
      </div>
    </Layout>
  );
}
