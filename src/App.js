import { Button, ConfigProvider, Grid, Space } from "antd";
import "./App.css";
import "./styles/GlobalStyles.css";
import { AntDesignOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { useContext } from "react";

function App() {
  const screens = Grid.useBreakpoint();
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const linearGradientButton = css`
    &.${rootPrefixCls}-btn-primary:not([disabled]):not(
        .${rootPrefixCls}-btn-dangerous
      ) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `;
  return (
    <div className="container">
      <div
        style={{
          backgroundImage: `url(wallpaper.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100vh",
          position: "relative",
        }}
      >
        <Space
          direction="vertical"
          style={{
            position: "absolute",
            top: "3%",
            left: "50%",
            transform: "translateX(-50%)",
            margin: 0,
            textAlign: "center",
          }}
        >
          <h1>Hi 🙂, I'm Dong Khong</h1>
          <p>
            I'm a Full Stack Developer with a passion for crafting robust and
            user-friendly web applications. I leverage technologies like
            Nest.js, Express.js, and Next.js to build scalable and efficient
            solutions.
          </p>
          <ConfigProvider
            button={{
              className: linearGradientButton,
            }}
          >
            <Button type="primary" size="middle" icon={<AntDesignOutlined />}>
              Contact Me
            </Button>
          </ConfigProvider>
        </Space>
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="box box1">1</div>
          <div className="box box2">2</div>
          <div className="box box3">3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
