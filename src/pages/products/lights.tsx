import { Flex, Divider, Card, Image, Carousel, Layout, Typography } from "antd";
//import lightlists from "../../datas/lightlist"
import { json, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { stringify } from "querystring";
import {reqGetAllProduct,reqGetProductbyFilter} from "../../api/productsapi"
const { Meta } = Card;

export default function LightsPage() {
  //let lightlist:Array<Listdata> = [];
  const [lightlist, setlightlist] = useState<any>({});
  const [postData, setPostData] = useState({ "category": 'light' });
  const [isLoading, setIsLoading] = useState(true);

  //等待后端请求完了再渲染网页
  useEffect(() => {reqGetProductbyFilter(postData).then((response: any) => {
    console.log(response)
    setlightlist(response)
    setIsLoading(false)
  })}, [])   // 空数组表示这个effect只在组件挂载时运行一次
  //加载完之前不渲染网页
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://safehomecam.com/files/data/products.json');
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       //console.log(response.json())
  //       const jsonData = await response.json();
  //       //console.log(jsonData)
  //       setlightlist(jsonData);
  //       setError(null);
  //     } catch (e) {
  //       setError('Could not load data');
  //       setlightlist(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
  return (
    <Flex justify="center" gap="large" style={{ width: "100%" }} wrap="wrap">
      {lightlist.map((item:any) => (
        <Flex key={"product_" + item.id}>
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
