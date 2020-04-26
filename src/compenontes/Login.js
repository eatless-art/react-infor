import React, { Component } from "react";
import { Button, Input } from "antd";
import "antd/dist/antd.css";
import "./login.css";
import { Link } from "react-router-dom";
class Login extends Component {
  state = {
    usernameVal: "",
    passwordVal: "",
    isLogin: false,
  };
  render() {
    const { usernameVal, passwordVal, isLogin } = this.state;
    return (
      <div className="login">
        {isLogin ? (
          <div className="yin">
            <div className="yin-box">
              <div>账号或者密码错误</div>
              <Button type="primary" onClick={this.Judge2}>
                确定
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="center">
          <h4>用户中心</h4>
          <div className="zhangbox">
            {" "}
            <label className="username-label" htmlFor="username">
              账号:
            </label>
            <Input
              className="username-box"
              onChange={(event) => this.change(event)}
              value={usernameVal}
              id="username"
              type="text"
            />
          </div>
          <div className="mimabox">
            {" "}
            <label htmlFor="mima" className="password-label">
              密码:
            </label>
            <Input.Password
              className="password-box"
              onChange={(event) => this.change2(event)}
              value={passwordVal}
              id="mima"
              type="password"
            />
          </div>
          <div className="loginbtnbox">
            <Link
              to={
                usernameVal === "xiaopan" && passwordVal === "aaaaa"
                  ? "/header"
                  : "/"
              }
            >
              <Button type="primary" onClick={this.Judge} className="loginbtn">
                登录
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  change = (event) => {
    this.setState({
      usernameVal: event.target.value,
    });
  };
  change2 = (event) => {
    this.setState({
      passwordVal: event.target.value,
    });
  };
  Judge = () => {
    const { usernameVal, passwordVal } = this.state;
    if (!(usernameVal === "xiaopan" && passwordVal === "aaaaa")) {
      this.setState({
        isLogin: true,
      });
    }
  };
  Judge2 = () => {
    this.setState({
      isLogin: false,
    });
  };
}
export default Login;
