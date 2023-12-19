import { useNavigate } from "react-router-dom";
import React from "react";
import "./Style/Shop.css";
const Shop = () => {
  const navigate = useNavigate();

  const gologin = () => {
    navigate("/login");
  };
  //   onclick setting
  return (
    <main>
      <section className="market">
        <div className="market1">
          <img src={require("./pictures/20230619-2.png")} alt="bottle" />
          <hr />
          <p>Level Up Bottle / 500ml</p>
          <button onClick={gologin}>直接購買</button>
        </div>
        <div className="market1">
          <img src={require("./pictures/20230619-2.png")} alt="bottle" />
          <hr />
          <p>Level Up Bottle / 750ml</p>
          <button onClick={gologin}>直接購買</button>
        </div>
        <div className="market1">
          <img src={require("./pictures/20230619-2.png")} alt="bottle" />
          <hr />
          <p>Level Up Bottle / 1000ml</p>
          <button onClick={gologin}>直接購買</button>
        </div>
      </section>
    </main>
  );
};

export default Shop;
