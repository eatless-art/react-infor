import React, { Component } from "react";
import { Button, Input } from "antd";
import "antd/dist/antd.css";
import "./connectus.css";
import { Link } from "react-router-dom";
class Connectus extends Component {
  render() {
    return (
      <div className="callme">
        <div className="title">
          请在下面留下您的任何意见、建议、想法或投诉，我们会本着服务至上的原则尽快处理：
        </div>
        <div className="callcontent">
          <div className="clearfix">
            {" "}
            <label htmlFor="b1"> 您的姓名：</label>{" "}
            <Input id="b1" type="text" />
          </div>
          <div className="clearfix">
            {" "}
            <label htmlFor="b2">您的Email：</label>
            <Input id="b2" type="text" />
          </div>
          <div className="clearfix">
            {" "}
            <label htmlFor="b3">您的电话：</label>
            <Input id="b3" type="text" />
          </div>
          <div className="clearfix">
            {" "}
            <label htmlFor="b4">您的留言：</label>{" "}
            <textarea
              className="liuyan"
              name=""
              id="b4"
              cols="50"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="btnbox">
          <Link to="/header">
            {" "}
            <Button type="primary">提交</Button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Connectus;
