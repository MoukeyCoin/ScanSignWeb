import { Flex, Divider, Card, Image, Carousel, Layout, Typography } from "antd";
import blog from "../../datas/bloglist";
import { Link } from "react-router-dom";

const { Meta } = Card;
export default function BlogIndex() {
  return (
    <Flex justify="center" gap="large" style={{ width: "100%" }} wrap="wrap">
      {blog.map((item, index) => (
        <Flex>
          <Link to={"/Blog/" +  item.id}>
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
