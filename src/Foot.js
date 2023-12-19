import React from "react";
import "./Style/footer.css";
const Foot = () => {
  return (
    <div>
      <footer>
        <div className="contract">
          <h3>聯絡我們</h3>
          <span> 地址 : 台北市大安區忠孝東路三段1號 </span>
          <span> 電話 ： (02) 2711- 2171 </span>
          <span> 周一至周五 09:30-18:00 </span>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7106078918746!2d121.53182407493767!3d25.04389323789392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97d255598df%3A0x47ea748e8f3f53aa!2z5ZyL56uL6Ie65YyX56eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1699312847552!5m2!1szh-TW!2stw"
            width="200"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </div>
  );
};

export default Foot;
