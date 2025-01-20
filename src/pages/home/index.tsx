import React from "react";
import { Flex, Divider, Card, Image, Carousel, Layout, Row, Col } from "antd";
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
      <Row gutter={[24, 24]} style={{ padding: '24px' }}>
        <Col span={24} style={{ 
          padding: '0 16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            maxWidth: '100%',
            width: '100%',
            textAlign: 'center'
          }}>
            <Typography.Title
              level={1}
              style={{
                color: '#2c3e50',
                marginBottom: '24px',
                fontSize: 'clamp(24px, 6vw, 40px)',
                wordWrap: 'break-word',
                lineHeight: '1.2',
                padding: '0 16px'
              }}
            >
              Welcome to Scan Sign
            </Typography.Title>
          </div>
        </Col>
        
        <Col xs={24} md={18} lg={14} style={{ margin: '0 auto' }}>
          <Typography.Paragraph
            style={{
              fontSize: '18px',
              color: '#34495e',
              textAlign: 'center',
              lineHeight: '1.8'
            }}
          >
            Unlimited connecting Boundless, limitless, your trustworthy gateway
            to the world, where information flows without barriers and assets are
            interconnected seamlessly. Unlimited connecting, making the world
            pulse at your fingertips.
          </Typography.Paragraph>
        </Col>

        <Col span={24} style={{ textAlign: 'center', margin: '24px 0' }}>
          <Image 
            src="https://safehomecam.com/files/home/step.png" 
            preview={false}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Col>
      </Row>
      
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
      <Row gutter={[24, 24]} style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <Col span={24}>
          <Typography.Title level={2} style={{ color: '#2c3e50', marginBottom: '24px' }}>
            Outlining the Problems
          </Typography.Title>
          
          <Card style={{ marginBottom: '24px' }}>
            <Typography.Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Total global Real Estate was valued at over $378.7 trillion at the end
              of 2022 (Source: Savills article by Paul Torstevin). This eye watering
              sum remains the largest store of wealth across all sectors. Yet only
              1.1% of the global population own nearly half of the world’s total
              wealth (Source: Credit Suisse Global Wealth Databook 2021). Due to the
              complex nature of real estate and the traditional need for trusted
              intermediaries, many real estate investment opportunities are not
              possible for the average person.
            </Typography.Paragraph>
            
            <Typography.Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Nearly 40% of global carbon dioxide emissions come from the real
              estate sector (Source: Forbes article by David Carlin Apr 5, 2022).
              Approximately 70% are produced by building operations, while the
              remaining 30% comes from construction.
            </Typography.Paragraph>
            
            <Typography.Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              An estimated 150 million people are homeless globally, though the real
              number is probably higher (Source: The World Economic Forum website
              article by Patrick Henry Oct 2021).
            </Typography.Paragraph>
          </Card>
        </Col>

        <Col span={24}>
          <Typography.Title level={2} style={{ color: '#2c3e50', marginBottom: '24px' }}>
            The Solution
          </Typography.Title>
          
          <Row gutter={[24, 24]}>
            <Col xs={24} md={14}>
              <Card>
                <Typography.Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  By aligning the interests of the small to medium sized real estate
                  developer, the investor and the tenant we can bring value and
                  control back in to the hands of the stakeholders.
                </Typography.Paragraph>
                
                <Typography.Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  Xcavate aims to level the playing field through increasing capital
                  and technical efficiency, reducing friction by automating and
                  simplifying processes, and removing intermediaries. This is
                  achieved by leveraging digital identity, dApps and oracles. The
                  resulting protocol is transparent and auditable without requiring
                  deep expertise, and brings trust-less accessibility and security
                  to the real estate market.
                </Typography.Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} md={10}>
              <Card title="Advantages">
                <Typography.Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  • Lending & asset tokenisation protocol
                </Typography.Paragraph>
                <Typography.Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  • Investor controlled real estate structure
                </Typography.Paragraph>
                <Typography.Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  • Decentralised & community controlled platform
                </Typography.Paragraph>
                <Typography.Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  • Lower fees, quicker settlement with greater liquidity
                </Typography.Paragraph>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col span={24} style={{ marginTop: '24px' }}>
          <Image 
            src="https://safehomecam.com/files/home/realestate.png" 
            preview={false} 
            style={{ width: '100%', height: 'auto' }}
          />
        </Col>
      </Row>
    </Layout>
  );
}
