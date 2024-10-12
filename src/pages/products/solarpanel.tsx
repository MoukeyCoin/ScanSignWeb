import { Flex, Divider, Card, Image, Carousel, Layout, Typography } from "antd";
import solarpanellist from "../../datas/solarpanellist"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { reqGetProductbyFilter } from "../../api/productsapi";

const { Meta } = Card;
export default function SolarPanelPage() {
  //let lightlist:Array<Listdata> = [];
  const [solarpanellist, setsolarpanellist] = useState<any>({});
  const [postData, setPostData] = useState({ "category": 'solarpanel' });
  const [isLoading, setIsLoading] = useState(true);

  //等待后端请求完了再渲染网页
  useEffect(() => {reqGetProductbyFilter(postData).then((response: any) => {
    console.log(response)
    setsolarpanellist(response)
    setIsLoading(false)
  })}, [])   // 空数组表示这个effect只在组件挂载时运行一次
  //加载完之前不渲染网页
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Flex justify="center" gap="large" style={{ width: "100%" }} wrap="wrap">
      {solarpanellist.map((item:any, index:number) => (
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
