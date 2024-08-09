import React, { useState } from "react";
import {
  Button,
  ConfigProvider,
  Grid,
  List,
  Popover,
  Space,
  Modal,
  Form,
  Input,
  Flex,
  Tag,
  Image,
  Typography,
  Carousel,
} from "antd";
import "./App.css";
import "./styles/GlobalStyles.css";
import { AntDesignOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { useContext } from "react";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaEnvelope,
  FaDocker,
} from "react-icons/fa";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJavascript1,
  DiMsqlServer,
  DiLinux,
} from "react-icons/di";
import {
  SiTypescript,
  SiNestjs,
  SiExpress,
  SiSocketdotio,
  SiCplusplus,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { GiPositionMarker } from "react-icons/gi";
import SmartHome from "./assets/SmartHome.png";
import WorkManagement from "./assets/WorkManagement.png";

// import ChirpConnect from "./assets";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const screens = Grid.useBreakpoint();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Received values from form: ", values);
        form.resetFields();
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
  const linearGradientButton2 = css`
    &.${rootPrefixCls}-btn-primary:not([disabled]):not(
        .${rootPrefixCls}-btn-dangerous
      ) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #00b09b, #96c93d);
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
  const linearGradientButton3 = css`
    &.${rootPrefixCls}-btn-primary:not([disabled]):not(
        .${rootPrefixCls}-btn-dangerous
      ) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #00c6ff, #0072ff);

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

  const colors = [
    "processing",
    "success",
    "error",
    "magenta",
    "red",
    "volcano",
    "orange",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ];

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const topValue = screens.xs
    ? "47%"
    : screens.sm && !screens.md
    ? "47%"
    : screens.md && !screens.lg
    ? "47%"
    : screens.lg && !screens.xl
    ? "47%"
    : screens.xl && !screens.xxl
    ? "47%"
    : "47%";

  const profile = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/dongpfiev2014",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/khong.minhdong",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/the.dictator.54",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/dong-khong",
    },
    {
      name: "Telegram",
      icon: <FaTelegram />,
      url: "https://t.me/dongpfiev2014",
    },
    { name: "WhatsApp", icon: <FaWhatsapp />, url: "https://wa.link/m7g69e" },
  ];

  const technologies = [
    { name: "Typescript", icon: <SiTypescript /> },
    { name: "Nest.js", icon: <SiNestjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Node.js", icon: <DiNodejs /> },
    { name: "React", icon: <DiReact /> },
    { name: "Next.js", icon: <RiNextjsFill /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "Socket.IO", icon: <SiSocketdotio /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "MS SQL", icon: <DiMsqlServer /> },
    { name: "Linux", icon: <DiLinux /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "C++", icon: <SiCplusplus /> },
  ];

  const recentProjects = [
    {
      title: "ChirpConnect - Social Network",
      description:
        "ChirpConnect is a social networking platform featuring tweet management, likes, follows, retweets, search, real-time notifications, messaging, group chats & profile management.",
      url: "https://example.com/project1",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      title: "Work Management",
      description:
        "Work Management is a comprehensive platform designed to manage and track tasks, projects, and teams within an organization. It includes features like user role management, task assignment, progress tracking, notifications, and document management.",
      url: "https://tasktis.netlify.app",
      thumbnail: WorkManagement,
    },
    {
      title: "Smart Home Ecommerce",
      description:
        "Smart Home Ecommerce is a modern e-commerce platform focused on selling smart home products. The website features product listings, detailed project references, news articles and product showcases, providing users with a comprehensive shopping experience.",
      url: "https://vimarsmarthome.netlify.app",
      thumbnail: SmartHome,
    },
  ];

  const profileBox = (
    <div className="box box1">
      <h3>Contact Information</h3>
      <Flex
        gap={screens.xl ? 10 : 5}
        align="flex-start"
        justify={screens.xs ? "flex-start" : "center"}
        vertical
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <List
          grid={{
            gutter: 5,
            xs: 2,
            sm: 2,
            md: 2,
            lg: 2,
            xl: 3,
            xxl: 3,
          }}
          dataSource={profile}
          renderItem={(item) => (
            <List.Item>
              <ConfigProvider
                button={{
                  className: linearGradientButton,
                }}
              >
                <Button
                  size={screens.xxl ? "middle" : "small"}
                  type="primary"
                  icon={item.icon}
                  onClick={() => window.open(item.url, "_blank")}
                >
                  {item.name}
                </Button>
              </ConfigProvider>
            </List.Item>
          )}
        />
        <ConfigProvider
          button={{
            className: linearGradientButton2,
          }}
        >
          <Button
            type="primary"
            size={screens.xxl ? "middle" : "small"}
            icon={<FaEnvelope />}
            onClick={() => {
              window.location.href = "mailto:dongpfiev2014@gmail.com";
            }}
          >
            dongpfiev2014@gmail.com
          </Button>
          <Button
            type="primary"
            size={screens.xxl ? "middle" : "small"}
            icon={<GiPositionMarker />}
          >
            Hanoi Capital Region, Vietnam
          </Button>
        </ConfigProvider>
      </Flex>
    </div>
  );

  const technologiesBox = (
    <div className="box box2">
      <h3>Skills</h3>
      <Flex
        gap={5}
        align="center"
        justify={screens.xs ? "flex-start" : "center"}
        vertical
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <List
          grid={{
            gutter: 5,
            xs: 3,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={technologies}
          renderItem={(item) => (
            <List.Item>
              <Tag
                bordered={true}
                className="tagSkill"
                color={getRandomColor()}
              >
                {item.icon} {item.name}
              </Tag>
            </List.Item>
          )}
        />
      </Flex>
    </div>
  );

  const projectsBox = (
    <div className="box box3">
      <h3>Recent Projects</h3>
      <Flex
        gap={5}
        align="center"
        justify={screens.xs ? "flex-start" : "center"}
        vertical
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <List
          dataSource={recentProjects}
          style={{ width: "100%", height: "auto", overflowY: "hidden" }}
          renderItem={(item, index) => (
            <List.Item style={{ cursor: "pointer" }}>
              <Popover
                placement={screens.xl ? "left" : "top"}
                title={item.title}
                content={
                  <>
                    <div>
                      <Space
                        direction={screens.xs ? "vertical" : "horizontal"}
                        align="start"
                        size={5}
                        style={{
                          width: screens.xs
                            ? "350px"
                            : screens.sm && !screens.md
                            ? "500px"
                            : screens.md && !screens.lg
                            ? "600px"
                            : screens.lg && !screens.xl
                            ? "800px"
                            : screens.xl && !screens.xxl
                            ? "800px"
                            : "800px",
                          height: "auto",
                        }}
                      >
                        <Image
                          alt={item.title}
                          src={item.thumbnail}
                          preview={false}
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "10px",
                            objectFit: "cover",
                            overflow: "hidden",
                          }}
                        />
                        <Space direction="vertical" style={{ width: "100%" }}>
                          <Typography.Paragraph
                            style={{ fontSize: screens.xs ? 12 : 14 }}
                          >
                            {item.description}
                          </Typography.Paragraph>
                          <Button
                            danger
                            type="primary"
                            target="_blank"
                            onClick={() => window.open(item.url, "_blank")}
                          >
                            Visit Site
                          </Button>
                        </Space>
                      </Space>
                    </div>
                  </>
                }
              >
                <List.Item.Meta
                  avatar={
                    <Image
                      className="thumbnailProject"
                      alt={item.title}
                      src={item.thumbnail}
                      preview={false}
                      style={{
                        width: screens.xxl ? "100px" : "70px",
                        height: screens.xxl ? "70" : "50px",
                        borderRadius: "5px",
                        objectFit: "cover",
                        overflow: "hidden",
                      }}
                    />
                  }
                  title={
                    <>
                      <Typography.Title
                        style={{ fontSize: screens.xl ? 14 : 11.5 }}
                      >
                        {item.title}
                      </Typography.Title>
                    </>
                  }
                  description={
                    <>
                      <div
                        style={{
                          width: "30px",
                          height: "25px",
                          backgroundColor: "black",
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "5px",
                        }}
                        className="descriptionProject"
                      >
                        {0}
                        {index + 1}
                      </div>
                    </>
                  }
                />
              </Popover>
            </List.Item>
          )}
        />
      </Flex>
    </div>
  );

  return (
    <>
      <div className="container">
        <div
          style={{
            backgroundImage: `url(wallpaper.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            minHeight: "100vh",
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
              width: "100%",
              padding: 5,
              fontSize: screens.xs && "13px",
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
                className: linearGradientButton3,
              }}
            >
              <Button
                type="primary"
                size="middle"
                icon={<AntDesignOutlined />}
                onClick={showModal}
              >
                Contact Me
              </Button>
            </ConfigProvider>
          </Space>

          <div
            className="averageBox"
            style={{
              position: "absolute",
              top: topValue,
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: screens.xl ? "100%" : "330px",
              height: "auto",
              overflowY: "hidden",
              padding: 10,
            }}
          >
            {screens.xl ? (
              <>
                {profileBox}
                {technologiesBox}
                {projectsBox}
              </>
            ) : (
              <Carousel arrows infinite={true} autoplay autoplaySpeed={4000}>
                {profileBox}
                {technologiesBox}
                {projectsBox}
              </Carousel>
            )}
          </div>
        </div>

        <ConfigProvider
          theme={{
            token: {
              colorBgBase: "#dfd2c7",
            },
          }}
        >
          <Modal
            title="Contact Me"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Send"
          >
            <ConfigProvider
              theme={{
                token: {
                  colorBgBase: "#f0f0f0",
                },
              }}
            >
              <Form form={form} layout="vertical">
                <Form.Item
                  name="name"
                  label="Your Name: "
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input placeholder="Your Name.." />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email Address: "
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please input a valid email!",
                    },
                  ]}
                >
                  <Input placeholder="user@example.com" />
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Message: "
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="Your message..." />
                </Form.Item>
                Best Regards !!
              </Form>
            </ConfigProvider>
          </Modal>
        </ConfigProvider>
      </div>
    </>
  );
}

export default App;
