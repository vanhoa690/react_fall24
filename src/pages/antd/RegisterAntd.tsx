import { Button, Form, FormProps, Input } from "antd";
import { registerUser, User } from "../../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const RegisterAntd = () => {
  const nav = useNavigate();

  const onFinish: FormProps<User>["onFinish"] = (values) => {
    registerUser(values)
      .then(() => {
        toast.success("Ok Minh dang ky dc roi Yeah !");
        nav("/login");
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };

  //   const onFinishFailed = () => {
  //     toast.error("Errors");
  //   };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      //   onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<User>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<User>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
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
};
