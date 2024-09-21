import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { deleteProduct, getAllProduct } from "../../../services/product";
import { Button, Popconfirm, Table } from "antd";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
};

export default function ProducListAntd() {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProduct()
      .then(({ data }) => setProducts(data))
      .catch((e) => {
        toast.error("Error: " + (e as AxiosError).message);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id: number) => {
    setLoading(true);
    deleteProduct(id).then(() => window.location.reload());
  };
  const dataSource = products.map((product) => ({
    key: product.id,
    ...product,
  }));

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Image",
      key: "image",
      render: (product: Product) => {
        return <img src={product.image} width={100} />;
      },
    },
    {
      title: "Actions",
      render: (product: Product) => (
        <Popconfirm
          title="Delete the product"
          description="Are you sure to delete this product?"
          onConfirm={() => handleDelete(product.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
  ];
  return (
    <div className="container">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <h1>Admin Product List</h1>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}
