import { useEffect, useState } from "react";
import { getAllProduct } from "../services/product";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { Col, Row } from "antd";

const { Meta } = Card;

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
};

export default function Homepage() {
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

  return (
    <div className="container">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <h1>Homepage</h1>
      <Row gutter={24}>
        {products.map((product, index) => (
          <Col className="gutter-row" span={6} key={index}>
            <Link to={`/product/${product.id}`}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={product.image} />}
              >
                <Meta title={product.title} description={product.description} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
