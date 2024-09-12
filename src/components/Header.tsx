import { Layout, Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

export default function HeaderClient() {
  const navigate = useNavigate();
  const onMenuClick = (item: { key: string }) => {
    navigate(item.key);
  };
  const menuList: MenuProps["items"] = [
    {
      key: "/",
      label: "Home",
    },
    {
      key: "/about",
      label: "About",
    },
  ];
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Menu
        onClick={onMenuClick}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/"]}
        items={menuList}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
}
