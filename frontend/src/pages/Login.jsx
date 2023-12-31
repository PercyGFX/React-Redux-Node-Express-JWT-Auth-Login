import React from "react";
import { Card, Form, Button, Input, Checkbox, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/slices/user";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);

    const username = values.username;
    const password = values.password;

    axios
      .post(
        "http://localhost:5000/login",
        { username, password },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        message.success(response.data.message);
        dispatch(
          login({
            username: response.data.username,
            isAuthenticated: response.data.success,
          })
        );
        navigate("/");
      })
      .catch((err) => {
        message.error(err.response.data.message);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="bg-blue-600 min-h-screen">
      <div className="flex justify-center  p-5">
        <Card className="flex flex-row justify-center w-3/12">
          <h1 className="text-xl font-semibold text-center py-4 font-poppins">
            This is Login
          </h1>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button className="bg-blue-600" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}
