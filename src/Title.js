import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style/Title.css";

const Title = () => {
  const navigate = useNavigate();

  const goShop = () => {
    navigate("/Shop");
  };

  const goProduct = () => {
    navigate("/Product");
  };
  //onclick setting
  return (
    <div>
      <main>
        <section className="backImage">
          <div className="one">
            <h1>
              EASY
              <br />
              BOTTLE
            </h1>
            <button className="goshopbutton" onClick={goShop}>
              前往商店
            </button>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section className="design">
          <div className="b">
            <img src={require("./pictures/0411-06.png")} alt="easyBottle" />
          </div>

          <div className="c">
            <h2>設計理念</h2>
            <p>
              加大口徑的設計，讓您在倒高蛋白粉時變得更加方便；並運用旋轉式的設計，讓您想喝時僅須轉一下，高蛋白粉就會掉入水中。
            </p>
            <p>幫您減少繁瑣的過程，讓健身變得更簡單！</p>
            <button className="goaboutusbutton" onClick={goProduct}>
              了解更多
            </button>
          </div>
        </section>
      </main>

      <div className="titleshop">
        <p>近期促銷</p>

        <div className="all">
          <div className="titlesell">
            <img src={require("./pictures/20230619-2.png")} alt="easyBottle" />
            <hr />
            <span>Level Up Bottle 500ml / NT$350</span>
          </div>

          <div className="titlesell">
            <img src={require("./pictures/20230619-2.png")} alt="easyBottle" />
            <hr />
            <span>Level Up Bottle 750ml / NT$500</span>
          </div>

          <div className="titlesell">
            <img src={require("./pictures/20230619-2.png")} alt="easyBottle" />
            <hr />
            <span>Level Up Bottle 1000ml / NT$650</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
