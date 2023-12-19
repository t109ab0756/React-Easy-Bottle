import React from "react";
import "./Style/Login.css";
const Login = () => {
  return (
    <main>
      <div className="form">
        <div className="border">
          <h1>繭單拉 Easy Bottle</h1>

          <br />

          <div className="username">
            <label className="userlabel" data-content="Username">
              <span className="hidden"> 帳號</span>
            </label>
            <input
              className="usernameinput"
              name="username"
              type="text"
              placeholder="請輸入帳號"
            />
          </div>

          <div className="password">
            <label className="passwordlabel">
              <span className="hidden">密碼</span>
            </label>
            <input
              className="passwordinput"
              name="password"
              type="password"
              placeholder="請輸入密碼"
            />
          </div>

          <button type="submit" className="button">
            登入
          </button>
        </div>
      </div>
    </main>
  );
};

export default Login;
