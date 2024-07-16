import {
  Flex,
  Divider,
  Card,
  Image,
  Carousel,
  Layout,
  Typography,
  Button,
  Tooltip,
} from "antd";
import {
  XOutlined,
  YoutubeOutlined,
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  TikTokOutlined
} from '@ant-design/icons';
const { Title } = Typography;

const { Meta } = Card;
export default function ContactIndex() {
  return (
    <Flex vertical style={{width: "100%"}}>
      <Flex
        style={{
          width: "100%",
          height: 200,
          marginTop: 5,
          backgroundColor: "#4121DE",
        }}
        vertical={false}
      >
        <Flex vertical style={{ marginLeft: 50, width: "75%" }}>
          <Title level={1} style={{ color: "white" }}>
            Have a question about Scan Sign Technology?
          </Title>
          <Title level={3} style={{ color: "white" }}>
            If you would like more information about this exciting project, then
            please contact us or follow us on social media.
          </Title>
        </Flex>
        <Flex>
          <Button
            type="primary"
            size="large"
            shape="round"
            style={{
              marginTop: 50,
              backgroundColor: "whitesmoke",
              height: 80,
              width: 250,
              fontSize: 30,
              color: "black",
            }}
          >
            CONTACT US
          </Button>
        </Flex>
      </Flex>
      <Flex style={{marginTop:20,alignSelf:"center"}}>
        <Tooltip title="X">
          <Button shape="circle" size="large"  icon={<XOutlined />} style={{backgroundColor:"lightblue"}} ></Button>
        </Tooltip>
        <Tooltip title="Youtube">
          <Button shape="circle" size="large"  icon={<YoutubeOutlined />} style={{backgroundColor:"lightblue",marginLeft:10}} ></Button>
        </Tooltip>
        <Tooltip title="Github">
          <Button shape="circle" size="large"  icon={<GithubOutlined />} style={{backgroundColor:"lightblue",marginLeft:10}} ></Button>
        </Tooltip>
        <Tooltip title="Linkedin">
          <Button shape="circle" size="large"  icon={<LinkedinOutlined />} style={{backgroundColor:"lightblue",marginLeft:10}} ></Button>
        </Tooltip>
        <Tooltip title="Tiktok">
          <Button shape="circle" size="large"  icon={<TikTokOutlined />} style={{backgroundColor:"lightblue",marginLeft:10}} ></Button>
        </Tooltip>
        <Tooltip title="Facebook">
          <Button shape="circle" size="large"  icon={<FacebookOutlined />} style={{backgroundColor:"lightblue",marginLeft:10}} ></Button>
        </Tooltip>
      </Flex>
    </Flex>
  );
}
