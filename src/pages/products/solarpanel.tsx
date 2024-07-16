import { Flex, Divider, Card, Image, Carousel, Layout, Typography } from "antd";
import solarpanellist from "../../datas/solarpanellist"
import { Link } from "react-router-dom";

const { Meta } = Card;
export default function SolarPanelPage() {
  return (
    <Flex justify="center" gap="large" style={{ width: "100%" }} wrap="wrap">
      {solarpanellist.map((item, index) => (
        <Flex>
          {/* target="_blank" open a new tab */}
          <Link to={item.link} target="_blank">
            <Card
              hoverable //鼠标移过时可浮起
              style={{ width: 380, marginTop: 20, height: 600 }}
              cover={
                <img alt="example" src={item.cover} style={{ height: 300 }} />
              }
            >
              <Meta
                title={
                  <Flex
                    style={{
                      textWrap: "wrap",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography style={{ fontSize: 25 }}>
                      {item.title}
                    </Typography>
                    <Divider />
                    <Typography style={{ fontSize: 20 }}>
                      {item.subtitle}
                    </Typography>
                  </Flex>
                }
                description={
                  <Typography style={{ fontSize: 15 }}>
                    {item.description}
                  </Typography>
                }
              />
            </Card>
          </Link>
        </Flex>
      ))}
    </Flex>
  );
}
