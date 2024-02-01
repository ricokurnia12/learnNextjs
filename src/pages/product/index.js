import { useEffect, useState } from "react";

import { useRouter } from "next/router";

const Testes = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [product, setProduct] = useState();
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      return push("/auth/login");
    }

    fetch("/api/product")
      .then((res) => res.json())
      .then((response) => {
        setProduct(response.data);
        console.log(product);
      });
  }, []);

  return (
    <>
      <h1>Product Page</h1>
      <hr />
      {product?.map((product, idx) => {
        return (
          <>
            {" "}
            <p>name:{product.name}</p>
            <p>size:{product.size}</p>
            <p>price:{product.price}</p>
            <hr />
          </>
        );
      })}
    </>
  );
};

export default Testes;
