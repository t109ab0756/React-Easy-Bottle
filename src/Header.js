import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style/nav.css";
import reusableBottle1 from "./pictures/reusable-bottle (1).png";
import reusableBottle2 from "./pictures/reusable-bottle.png";

export default Header;

function Header() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const [scrollY, setScrollY] = useState(0);
  const [header, setHeader] = useState(null);
  const [imag, setImag] = useState(null);
  const [headerAnchors, setHeaderAnchors] = useState([]);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    const headerElement = document.querySelector("header");
    const imagElements = document.querySelectorAll("header div.logo img");
    const headerAnchorElements =
      document.querySelectorAll("header nav ul li a");

    setHeader(headerElement);
    setImag(imagElements[0]);
    setHeaderAnchors(headerAnchorElements);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (header && imag && headerAnchors.length > 0) {
      if (scrollY !== 0) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        header.style.color = "white";
        imag.src = reusableBottle1;
        headerAnchors.forEach((a) => {
          a.style.color = "white";
        });
      } else {
        header.style = "";
        imag.src = reusableBottle2;
        headerAnchors.forEach((a) => {
          a.style.color = "#09777d";
        });
      }
    }
  }, [scrollY, header, imag, headerAnchors]);

  // 狀態與方法

  return (
    <header>
      <div className="logo">
        <img src={reusableBottle2} onClick={goBack} alt="Logo" />
        <h1 onClick={goBack}>繭單拉</h1>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/AboutTeam">關於我們</Link>
          </li>
          <li>
            <Link to="/Product">關於商品</Link>
          </li>
          <li>
            <Link to="/Shop">商品內容</Link>
          </li>
          <li>
            <Link to="/Login">登入</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
