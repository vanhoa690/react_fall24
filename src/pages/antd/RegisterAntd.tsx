import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { registerUser, User } from "../../services/auth";

export default function RegisterAntd() {
  const nav = useNavigate();

  const onFinish: FormProps<User>["onFinish"] = (values) => {
    registerUser(values)
      .then(() => {
        toast.success("Register Success");
        nav("/login");
      })
      .catch(() => toast.error("Error"));
  };

  const onFinishFailed: FormProps<User>["onFinishFailed"] = (errorInfo) => {
    const errors = errorInfo.errorFields
      .map((error) => error.errors.join(", "))
      .join(" + ");
    toast.error("Error: " + errors);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<User>
        label="Email"
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "${label} is required",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<User>
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!" },
          { min: 6, message: "Password must be minimum 6 characters." },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
