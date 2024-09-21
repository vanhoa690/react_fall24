import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { deleteProduct, getAllProduct } from "../../services/product";
import toast from "react-hot-toast";
import { Button, Popconfirm, Table } from "antd";

export default function AdminProductListAntd() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllProduct()
      .then(({ data }) => {
        toast.success("oh Yeah");
        setProducts(data);
      })
      .catch((error) => toast.error("Error: " + error.message))
      .finally(() => setLoading(false));
  }, []);

  const handleDeleteProduct = (id: number) => {
    deleteProduct(id)
      .then(() => {
        toast.success(`Delete Product Id: ${id} Successfull`);
        location.reload();
      })
      .catch((error) => toast.error("Error: " + error.message));
  };

  const columns = [
    {
      title: "Id",
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
      render: (value: string) => {
        return <span>{value} VND</span>;
      },
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (value: string) => {
        return <img src={value} width={80} />;
      },
    },
    {
      title: "Actions",
      key: "action",
      render: (product: Product) => {
        console.log(product);
        return (
          <Popconfirm
            title="Delete the product"
            description="Are you sure to delete this product?"
            onConfirm={() => handleDeleteProduct(product.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} />;
}
