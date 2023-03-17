import React from "react";
import { useParams, Link } from "react-router-dom";
import Title from "./Title";

export default function ProductDetail() {
  let params = useParams();
  return (
    <div>
      <Title mainTitle={params.id + "商品資料"} />

      <Link to="/">回到商品列表</Link>
    </div>
  );
}
