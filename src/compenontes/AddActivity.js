import React, { Component } from "react";
import { Button, Input } from "antd";
import "antd/dist/antd.css";
import "./addactivity.css";
import { Link } from "react-router-dom";
import store from "./store";
import { connect } from "react-redux";
class AddActivity extends Component {
  state = {
    c1: "",
    c2: "",
    shi: false,
  };
  render() {
    const { c1, c2, shi } = this.state;
    const { id } = this.props.match.params;

    return (
      <div className="addhuodong">
        {shi ? (
          <div className="yin">
            <div className="yin-box">
              <div>输入框不能为空</div>
              <Button type="primary" onClick={this.panduan2}>
                确定
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
        <h3 className="title">添加新活动集</h3>
        <div className="content">
          <div>
            <label htmlFor="c1">活动名称:</label>
            <Input
              onChange={(event) => this.ca(event)}
              value={c1}
              id="c1"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="c2">活动描述:</label>
            <Input
              onChange={(event) => this.cb(event)}
              value={c2}
              id="c2"
              type="text"
            />
          </div>
          <div>
            <Button onClick={this.add} type="primary">
              提交
            </Button>

            <Link to={`/activitymange/${id}`}>
              <Button type="primary">取消</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  add = () => {
    const { c1, c2 } = this.state;
    const id4 = this.props.match.params.id;
    if (c1.trim() && c2.trim()) {
      store.dispatch({ type: "ADDH", c1, c2, id4 });
      this.props.history.push(`/activitymange/${id4}`);
    } else {
      this.setState({
        shi: true,
      });
    }

    store.dispatch({ type: "ADDH", c1, c2, id4 });
  };
  ca = (event) => {
    this.setState({
      c1: event.target.value,
    });
  };
  cb = (event) => {
    this.setState({
      c2: event.target.value,
    });
  };
  panduan2 = () => {
    this.setState({
      shi: false,
    });
  };
}
const mapStoreToProps = (state) => {
  return {
    arr: state.arr,
  };
};
export default connect(mapStoreToProps)(AddActivity);
