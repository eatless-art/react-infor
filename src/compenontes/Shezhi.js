import React, { Component } from "react";
import { Button, Input } from "antd";
import "antd/dist/antd.css";
import "./userset.css";
import { Link } from "react-router-dom";
class Shezhi extends Component {
  render() {
    return (
      <div className="setup">
        <div className="user-setup">
          <h2>用户设置</h2>
          <div className="z1  set-box">
            {" "}
            <label htmlFor="o1">用户名：</label>
            <Input id="o1" type="text" />
          </div>
          <div className="z2  set-box">
            {" "}
            <label htmlFor="o2">密码:</label>
            <Input id="o2" type="text" />
          </div>
          <div className="z3  set-box">
            <label htmlFor="o3">新密码：</label>
            <Input id="o3" type="text" />
          </div>
          <div className="z4 set-box">
            <label htmlFor="o4">确认新密码：</label>
            <Input autoSize={false} id="o4" type="text" />
          </div>
          <div className="z5 set-box">
            {" "}
            <label htmlFor="o5">Email：</label>
            <Input id="o5" type="text" />
          </div>
          <div className="z6 set-box">
            {" "}
            <label htmlFor="o6">姓名：</label>
            <Input id="o6" type="text" />
          </div>
          <div className="z7 set-box">
            {" "}
            <label htmlFor="o7">电话：</label>
            <Input id="o7" type="text" />
          </div>
          <div className="z8">
            <Link to="/header">
              {" "}
              <Button type="primary">提交</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Shezhi;
