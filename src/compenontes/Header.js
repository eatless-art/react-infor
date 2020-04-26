import React, { Component } from "react";
import { Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./header.css";
import logo from "../img/u2_normal.gif";
import { Link, withRouter } from "react-router-dom";
class Header extends Component {
  render() {
    const { pathname } = this.props.location;
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            <Link
              className={pathname === "/customer" ? "active" : ""}
              to="/customer"
            >
              客户管理
            </Link>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            <span
              className={pathname === "/huodongguanli" ? "active" : ""}
              to="/huodongguanli"
            >
              活动管理
            </span>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            <span>查看报告</span>
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="header-wrap">
        <div className="header-top">
          <img src={logo} alt="" />
          <div className="nav">
            <div>jdchen2006@126.com </div>
            <Link to="/shezhi">用户设置</Link>
            <Link to="/helpcenter">帮助中心</Link>
            <Link to="/connectus">联系我们</Link>
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                功能 <DownOutlined />
              </a>
            </Dropdown>
            {this.props.location.pathname === "/" ? (
              ""
            ) : (
              <Link to="/">
                <Button type="primary" onClick={this.out}>
                  退出登陆
                </Button>
              </Link>
            )}
            {/* <Link to="/">
              
            </Link> */}
          </div>
        </div>
        {pathname === "/header" ||
        pathname.indexOf("/huodongguanli") !== -1 ||
        pathname === "/shezhi" ||
        pathname === "/bianji" ||
        pathname === "/add" ||
        pathname === "/addactivity" ||
        pathname === "/customer" ? (
          <div className="downnav"></div>
        ) : (
          ""
        )}
        <div className="first-page">
          <Link to="/header"></Link>{" "}
          {pathname === "/helpcenter"
            ? ""
            : pathname === "/customer"
            ? ""
            : pathname === "/add"
            ? ""
            : pathname === "/bianji"
            ? ""
            : pathname.indexOf("/huodongguanli") !== -1
            ? ""
            : ""}
        </div>
      </div>
    );
  }
  out = () => {
    localStorage.clear();
  };
  one = () => {
    console.log(21343254);
  };
}
export default withRouter(Header);
