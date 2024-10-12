import { Flex, Divider, Card, Image, Carousel, Layout, Typography } from "antd";

const { Meta } = Card;
export default function TeamIndex() {
  return (
    <Flex justify="center" gap="large" style={{ width: "100%" }} wrap="wrap">
      <Flex>
        <Card
          hoverable //鼠标移过时可浮起
          style={{ width: 380, marginTop: 20, height: 610 }}
          cover={<img alt="example" src="https://safehomecam.com/files/team/longhe.jpg" height={390} />}
        >
          <Meta
            title={
              <Flex style={{ display: "flex", flexDirection: "column" }}>
                <Typography style={{ fontSize: 25 }}>Long He</Typography>
                <Typography style={{ fontSize: 20 }}>CEO</Typography>
              </Flex>
            }
            description={
              <Typography style={{ fontSize: 15 }}>
                Over 10 years bussiness experiencs. Operate 2 companies in
                ShenZhen China.
              </Typography>
            }
          />
        </Card>

        <Card
          hoverable //鼠标移过时可浮起
          style={{ width: 380, margin: 20, height: 610 }}
          cover={<img alt="example" src="https://safehomecam.com/files/team/moukey.jpg" height={390}/>}
        >
          <Meta
            title={
              <Flex style={{ display: "flex", flexDirection: "column" }}>
                <Typography style={{ fontSize: 25 }}>Jie Mao</Typography>
                <Typography style={{ fontSize: 20 }}>CoFounder / CIO</Typography>
              </Flex>
            }
            description={
              <Typography style={{ fontSize: 15 }}>
                Over 15 years industry development experiencs. Dozens of web2
                projects.Full stack dev, Graduate of Dalian Universite of techlonogy.
              </Typography>
            }
          />
        </Card>
        <Card
          hoverable //鼠标移过时可浮起
          style={{ width: 380, margin: 20, height: 610 }}
          cover={<img alt="example" src="https://safehomecam.com/files/team/xiangwang.jpg" height={390}/> }
        >
          <Meta
            title={
              <Flex style={{ display: "flex", flexDirection: "column" }}>
                <Typography style={{ fontSize: 25 }}>Xiang Wang</Typography>
                <Typography style={{ fontSize: 20 }}>
                  CTO / Blockchain Engineer
                </Typography>
              </Flex>
            }
            description={
              <Typography style={{ fontSize: 15 }}>Xiang Wang is the tech mastermind behind the scenes of blockchain technology. He is the architect who design, build, and maintain the complex systems that power cryptocurrencies and other blockchain applications.</Typography>
            }
          />
        </Card>
        <Card
          hoverable //鼠标移过时可浮起
          style={{ width: 380, margin: 20, height: 610 }}
          cover={<img alt="example" src="https://safehomecam.com/files/team/datare.jpg" height={390}/>}
        >
          <Meta
            title={
              <Flex style={{ display: "flex", flexDirection: "column" }}>
                <Typography style={{ fontSize: 25 }}>Datare Ojo</Typography>
                <Typography style={{ fontSize: 20 }}>
                  CMO
                </Typography>
              </Flex>
            }
            description={
              <Typography style={{ fontSize: 15 }}>Ojo's the mastermind behind all our marketing efforts, from those catchy social media campaigns to the targeted content you see online.
              </Typography>
            }
          />
        </Card>
      </Flex>
    </Flex>
  );
}
