import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "./ProductList.module.css";
import Title from "./Title";
import QuantityBtn from "./QuantityBtn";
export default function ProductList() {
  let [productList, setProductList] = useState([]);
  useEffect(() => {
    //1 : 無第二個參數 : component每次render都會觸發
    //2 : Dependency Array是空array時 : 只會在第一次網頁render時會觸發
    //3 : Dependency Array是有變數時 : 第一次網頁render時 + 指定的變數改變 會觸發
    fetch("https://hoyinleung.github.io/demoapi/react-basic-product.json")
      .then((response) => response.json())
      .then((data) => setProductList(data));
  }, []); // <==  Dependency Array
  return (
    <div>
      <Title mainTitle="請選擇要買的東西" />
      <div>
        {productList.map((product) => (
          <div className={styles.productBorder} key={product.id}>
            {product.name}
            <br />
            {product.price}
            <br />
            <Link to={"/product/" + product.id}>
              <img
                src={process.env.PUBLIC_URL + "/img/" + product.image}
                alt=""
              />
            </Link>
            <br />
            {product.description}
            <br />
            <QuantityBtn/>
          </div>
        ))}
      </div>
    </div>
  );
}
