import React from "react";

import {
  Flex,
  Divider,
  Card,
  Image,
  Carousel,
  Layout,
  Radio,
  Typography,
} from "antd";
import { useParams } from "react-router-dom";
import news from "../../datas/newlist";
import url from "../../assets/images/news/1/polkadot.png";
import getAllFilesinFolder from "./getallfilesinfolder";

const { Text, Paragraph } = Typography;
const newlist = news;

export default function NewsTemplate() {
  const param = useParams();
  const passages = newlist.map(
    (item: {
      id: string;
      title: string;
      //pictures: string[];
      paragraph: string;
    }) => {
      if (param.newsid === item.id) return item;
    }
  );
  const passage = passages[0];
  const pictures:string[] = getAllFilesinFolder("/news/" + param.newsid + "/")
  console.log(pictures[0]);

  return (
    <Layout>
      <Paragraph>
        <Typography.Title
          level={1}
          style={{
            fontFamily: "Cochin",
            fontSize: 35,
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
            flexWrap: "wrap",
          }}
        >
          {passage?.title}
        </Typography.Title>
      </Paragraph>
      <div
        style={{
          backgroundColor: "black",
          alignSelf: "center",
          height: 450,
          width: 600,
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
          {pictures.map((item: string | undefined, index: any) => (
            <Flex style={{ justifyContent: "center" }} key={"pic_" + { index }}>
              {
                <Image
                  // src={item}
                  src={item}
                  height={380}
                  style={{ alignItems: "center" }}
                />
              }
            </Flex>
          ))}
        </Carousel>
      </div>
      <Text
        type="secondary"
        style={{
          fontFamily: "Cochin",
          fontSize: 15,
          color: "black",
          textAlign: "left",
          flexWrap: "wrap",
          margin:20,
        }}
      >
        {passage?.paragraph}
      </Text>
    </Layout>
  );
}
