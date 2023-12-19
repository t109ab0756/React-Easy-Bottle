import React from "react";
import "./Style/Product.css";
const Product = () => {
  return (
    <main>
      <section className="allt">
        <div className="title">
          <h2>
            幫您減少繁瑣的過程
            <br />
            讓健身變得更簡單
          </h2>
        </div>
      </section>

      <section className="advantage">
        <div className="advantage1">
          <h2>安全</h2>
          <p>
            以聚丙烯(PP)材質製
            <br />
            提供消費者安全的水壺
          </p>
        </div>
        <div className="advantage1">
          <h2>便利</h2>
          <p>
            可轉式設計
            <br />
            一轉即可搖晃飲用
          </p>
        </div>
        <div className="advantage1">
          <h2>人性化</h2>
          <p>
            加大口徑
            <br />
            方便倒入蛋白粉
          </p>
        </div>
      </section>
    </main>
  );
};

export default Product;
