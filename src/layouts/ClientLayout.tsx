import { Outlet } from "react-router-dom";
import HeaderClient from "../components/Header";
import FooterClient from "../components/Footer";
import { Layout } from "antd";

const { Content } = Layout;

export default function ClientLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderClient />
      <Content style={{ padding: "24px 48px" }}>
        <Outlet />
      </Content>
      <FooterClient />
    </Layout>
  );
}
