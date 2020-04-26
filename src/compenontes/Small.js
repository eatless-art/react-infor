import React, { Component } from "react";
class Small extends Component {
  state = {
    val: "mingcheng",
    cha: "",
  };
  render() {
    const {
      endtime,
      biegntime,
      num,
      fangke,
      zhuangtai,
      jiancedian,
      miaoshu,
      name,
      leixing,
    } = this.props;

    return (
      <div className="small">
        <div className="small-top">
          {" "}
          <div className="title">{leixing}</div>
        </div>

        <div className="one">
          <div className="top">活动名称</div>
          <div className="down">{name}</div>
        </div>
        <div className="two">
          <div className="top">描述</div>
          <div className="down">{miaoshu}</div>
        </div>
        <div className="three">
          <div className="top">监测点</div>
          <div className="down">{jiancedian}</div>
        </div>
        <div className="four">
          <div className="top">活动状态</div>
          <div className="down">{zhuangtai}</div>
        </div>
        <div className="five">
          <div className="top">唯一访客</div>
          <div className="down">{fangke}</div>
        </div>
        <div className="six">
          <div className="top">访客量</div>
          <div className="down">{num}</div>
        </div>
        <div className="seven">
          <div className="top">开始时间</div>
          <div className="down">{biegntime}</div>
        </div>
        <div className="eight">
          <div className="top"> 结束时间</div>
          <div className="down">{endtime}</div>
        </div>
        <div className="nine">
          <div className="top">操作</div>
          <div className="down">查看报告</div>
        </div>
      </div>
    );
  }
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
}
export default Small;
