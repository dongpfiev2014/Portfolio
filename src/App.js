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

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

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

  const recentProjects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      url: "https://example.com/project1",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      url: "https://example.com/project2",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      title: "Project 3",
      description: "Description of Project 3",
      url: "https://example.com/project3",
      thumbnail: "https://via.placeholder.com/150",
    },
  ];

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
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="box box1">
            <h3>Contact Information</h3>
            <Flex
              gap={10}
              align="center"
              justify="center"
              vertical
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 3,
                  lg: 3,
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
                        size="middle"
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
                  size="middle"
                  icon={<FaEnvelope />}
                  onClick={() => {
                    window.location.href = "mailto:dongpfiev2014@gmail.com";
                  }}
                >
                  dongpfiev2014@gmail.com
                </Button>
                <Button
                  type="primary"
                  size="middle"
                  icon={<GiPositionMarker />}
                >
                  Hanoi Capital Region, Vietnam
                </Button>
              </ConfigProvider>
            </Flex>
          </div>
          <div className="box box2">
            <h3>Skills</h3>
            <Flex
              gap={10}
              align="center"
              justify="center"
              vertical
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
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
                      style={{ fontSize: "15px" }}
                      color={getRandomColor()}
                    >
                      {item.icon} {item.name}
                    </Tag>
                  </List.Item>
                )}
              />
            </Flex>
          </div>
          <div className="box box3">
            <h3>Recent Projects</h3>
            <List
              dataSource={recentProjects}
              renderItem={(item) => (
                <List.Item style={{ cursor: "pointer" }}>
                  <Popover
                    placement="left"
                    content={
                      <div style={{ textAlign: "center" }}>
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          style={{ width: "100px" }}
                        />
                        <p>{item.description}</p>
                        <Button type="link" href={item.url} target="_blank">
                          Visit Site
                        </Button>
                      </div>
                    }
                    title={item.title}
                  >
                    <List.Item.Meta
                      avatar={
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          style={{ width: "50px" }}
                        />
                      }
                      title={item.title}
                      description={item.description}
                    />
                  </Popover>
                </List.Item>
              )}
            />
          </div>
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
                label="Your Name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input placeholder="Your Name.." />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email Address"
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
                label="Message"
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
  );
}

export default App;
