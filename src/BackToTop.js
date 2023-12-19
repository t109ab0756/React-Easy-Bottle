import React from "react";
import "./Style/BackToTop.css";

function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <img
      src={require("./pictures/back-to-top.png")}
      className="back-to-top"
      onClick={scrollToTop}
      alt="bottle"
    />
  );
}

export default BackToTop;
