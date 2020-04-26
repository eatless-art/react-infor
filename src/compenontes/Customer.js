import React, { Component } from "react";
import store from "./store";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./customer.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Customer extends Component {
  state = {
    val: "mingcheng",
    checked: false,
    cha: "",
    shi: false,
  };
  render() {
    const { val, checked, cha, shi } = this.state;
    const { arr } = this.props;
    const vb = arr.every((ele) => ele.dui === false);
    return (
      <div className="customer">
        {shi ? (
          <div className="yin">
            <div className="yin-box">
              <div>请勾选下面一项</div>
              <Button onClick={this.panduan2} type="primary">
                确定
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="content">
          <div className="add ">
            <Link to="/add" className="tianjia">
              添加用户
            </Link>
            <span className="daochu">[导出列表]</span>
          </div>
          <div className="xuanze ">
            <div className="left">
              <span>操作:</span>
              <Link className="bian" to={vb === true ? "/customer" : "/add"}>
                <span onClick={this.tianjia}>编辑</span>
              </Link>
              <span onClick={this.del} className="del">
                删除
              </span>
            </div>
            <div className="right">
              <label htmlFor="p1">在此处</label>
              <select value={val} onChange={this.handleChange.bind(this.event)}>
                <option value="mingcheng">客户名称</option>
                <option value="bianhao">客户编号</option>
              </select>
              <label htmlFor="p2">查找</label>
              <input
                value={cha}
                onChange={(event) => this.cha(event)}
                id="p2"
                type="text"
              />
              <button onClick={this.chazhao}>查找</button>
            </div>
          </div>
          <div className="bianhaocontent">
            {arr.length ? (
              <div className="ban">
                <div className="input">
                  <input
                    onChange={(event) => this.allchange(event)}
                    checked={checked}
                    type="checkbox"
                  />
                  {arr.map((item) => (
                    <input
                      className="chose"
                      key={item.id}
                      onChange={this.change.bind(this, item.id)}
                      type="checkbox"
                      checked={item.dui}
                    />
                  ))}
                </div>
                <div className="bianhao0">
                  <div>客户编号</div>
                  {arr.map((item) => (
                    <Link to={`/activitymange/${item.id}`} key={item.id}>
                      {item.num}
                    </Link>
                  ))}
                </div>
                <div className="mingcheng3">
                  <div>客户名称</div>
                  {arr.map((item) => (
                    <Link
                      to={`/activitymange/${item.id}`}
                      key={item.id}
                      className=""
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="miaoshu2">
                  <div>描述</div>
                  {arr.map((item) => (
                    <div key={item.id}>{item.mianshu}</div>
                  ))}
                </div>
                <div className="huodongshu">
                  <div>活动数</div>
                  {arr.map((item) => (
                    <div key={item.id}>{item.activenum}</div>
                  ))}
                </div>
                <div className="yonghufenpei">
                  <div>用户分配</div>
                  {arr.map((item) => (
                    <div key={item.id}>{item.customer}</div>
                  ))}
                </div>
              </div>
            ) : (
              <span>无</span>
            )}
          </div>
        </div>
      </div>
    );
  }
  tianjia = () => {
    const { arr } = this.props;
    const vb = arr.every((ele) => ele.dui === false);
    if (vb === true) {
      this.setState({
        shi: true,
      });
    }
  };
  panduan2 = () => {
    this.setState({
      shi: false,
    });
  };
  chazhao = () => {
    const { val, cha } = this.state;
    store.dispatch({ type: "SHAI", val, cha });
  };
  cha = (event) => {
    this.setState({
      cha: event.target.value,
    });
  };
  allchange = (event) => {
    this.setState({
      checked: !this.state.checked,
    });
    let checked = event.target.checked;
    store.dispatch({ type: "ALL", checked });
  };
  handleChange = (event) => {
    this.setState({
      val: event.target.value,
    });
    console.log(this.props.arr);
  };
  change = (id) => {
    store.dispatch({ type: "GAI", id });
  };
  del = () => {
    store.dispatch({ type: "DEL" });
  };
}
const mapStoreToProps = (state) => {
  return {
    arr: state.arr,
  };
};
export default connect(mapStoreToProps)(Customer);
