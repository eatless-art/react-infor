import React, { Component } from "react";
import store from "./store";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./activitymange.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class ActivityMange extends Component {
  state = {
    val: "mingcheng",
    checked: false,
    cha: "",
    shi: false,
  };
  render() {
    const { checked, shi } = this.state;
    const { arr } = this.props;
    const { id } = this.props.match.params;
    const arr1 = arr.filter((ele) => ele.id == id);
    return (
      <div className="acitivity-mange">
        {shi ? (
          <div className="yin">
            <div className="yin-box">
              <div>请勾选</div>
              <Button type="primary" onClick={this.panduan2}>
                确定
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="content">
          <div className="uptitle">
            <Link to={`/addactivity/${id}`} className="left">
              添加活动集
            </Link>
            <div className="right">[导出列表]</div>
          </div>
          <div className="miantitle ">
            <div className="left">
              <span>操作：</span>
              <span className="jump" onClick={this.jump}>
                编辑
              </span>
              <span onClick={this.del}>删除</span>
            </div>
            <div className="number-content">
              {arr1[0].huodong.length ? (
                <div className="ban">
                  <div className="input">
                    <input
                      onChange={(event) => this.chchange(event)}
                      checked={checked}
                      type="checkbox"
                    />
                    {arr1[0].huodong.map((item) => (
                      <input
                        key={item.huodongid}
                        onChange={this.change.bind(this, item.huodongid)}
                        type="checkbox"
                        checked={item.gou}
                      />
                    ))}
                  </div>
                  <div className="bianhao0">
                    <div>活动集名称</div>
                    {arr1[0].huodong.map((item) => (
                      <Link to={`/activity/${id}`} key={item.huodongid}>
                        {item.hudongmingcheng}
                      </Link>
                    ))}
                  </div>
                  <div className="miaoshu2">
                    <div>描述</div>
                    {arr1[0].huodong.map((item) => (
                      <div key={item.huodongid}>2007财年活动集合</div>
                    ))}
                  </div>
                  <div className="activenum">
                    <div>活动数</div>
                    {arr1[0].huodong.map((item) => (
                      <div key={item.huodongid}>
                        {item.huodongcontent.length}
                      </div>
                    ))}
                  </div>
                  <div className="begintime">
                    <div>开始时间</div>
                    {arr1[0].huodong.map((item) => (
                      <div key={item.huodongid}>{item.biegntime}</div>
                    ))}
                  </div>
                  <div className="endtime">
                    <div>结束时间</div>
                    {arr1[0].huodong.map((item) => (
                      <div key={item.huodongid}>{item.endtime}</div>
                    ))}
                  </div>
                </div>
              ) : (
                <span>请添加</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  del = () => {
    const { arr } = this.props;
    const { id } = this.props.match.params;
    // const arr1 = arr.filter((ele) => ele.id == id)[0].huodong;
    // const arr2 = arr1.filter((ele) => ele.gou === true);
    // console.log(arr);
    store.dispatch({ type: "DELLL", id });
  };
  jump = () => {
    const { arr } = this.props;
    const { id } = this.props.match.params;
    const arr1 = arr.filter((ele) => ele.id == id);
    const dui = arr1[0].huodong.every((ele) => ele.gou === false);
    console.log(dui);

    if (dui) {
      this.setState({
        shi: true,
      });
    } else {
      this.props.history.push(`/bianjihuodong/${id}`);
    }
  };
  change = (id) => {
    const id2 = this.props.match.params.id;
    // const arr1 = arr.filter((ele) => ele.id == id);
    // const checked = e.event.target.checked;
    store.dispatch({ type: "GAII", id, id2 });
  };
  handleChange = (event) => {
    this.setState({
      val: event.target.value,
    });
  };
  cha = (event) => {
    this.setState({
      cha: event.target.value,
    });
  };
  chazhao = () => {
    const { val, cha } = this.state;
    console.log(val, cha);
    // store.dispatch({ type: "SHAI", val, cha });
  };
  chchange = (event) => {
    this.setState({
      checked: !this.state.checked,
    });
    let checked = event.target.checked;
    const id2 = this.props.match.params.id;
    store.dispatch({ type: "ALLL", checked, id2 });
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
export default connect(mapStoreToProps)(ActivityMange);
