import "./App.css";
import Main from "./pages/index";
import React from "react";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            arrowSize: 50,
            dotHeight: 5,
          },
        },
      }}
    >
      <Main />
    </ConfigProvider>
  );
}

export default App;
