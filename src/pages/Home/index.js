import React, { useEffect, useState } from "react";
import Home from "../../component/Home";
import { getItem } from "../../helper";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProductItems = async () => {
    setLoading(true);
    if (products !== [] && products !== null) {
      try {
        const result = await getItem();
        if (result) {
          setLoading(false);
          setProducts(result);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getProductItems();
  }, []);

  return (
      <Home products={products} loading={loading} />
  );
}

export default HomePage;
