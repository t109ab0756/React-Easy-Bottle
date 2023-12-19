import React from "react";
import "./Style/aboutTeam.css";
const AboutTeam = () => {
  return (
    <div>
      <main id="AboutTeam">
        <section className="team">
          <div className="teamstory">
            <h2>團隊故事</h2>
            <span>三個來自台北科技大學的學生</span>
            <p>利用生活中遇到的問題</p>
            <p>創新出一款新產品</p>
          </div>
          <div className="hand">
            <img
              src={require("./pictures/close-up-hands-clapping-celebration-success (1).jpg")}
              alt="easyBottle"
            />
          </div>
        </section>

        {/* think */}

        <section className="teammate">
          <div className="h1">
            <h2>團隊成員</h2>
          </div>
          <div className="group">
            <div className="group1">
              <img src={require("./pictures/user (1).png")} alt="man" />
              <span>謝同學</span>
              <p>國立台北科技大學</p>
              <p>資訊與財金系</p>
            </div>
            <div className="group1">
              <img src={require("./pictures/user (1).png")} alt="man" />
              <span>張同學</span>
              <p>國立台北科技大學</p>
              <p>文發所</p>
            </div>
            <div className="group1">
              <img src={require("./pictures/user (1).png")} alt="man" />
              <span>劉同學</span>
              <p>國立台北科技大學</p>
              <p>資訊與財金系</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutTeam;
