import { Flex, Divider, Card, Image, Carousel, Layout, Typography } from "antd";

const { Meta } = Card;
export default function RoadmapIndex() {
  return (
    <Flex
      justify="center"
      gap="large"
      style={{ width: "100%", margin: 50 }}
      wrap="wrap"
    >
      <Flex>
        <Image src="./web/roadmap/roadmap.png" preview={false} />
      </Flex>
    </Flex>
  );
}
