import React, { Component } from "react";
import Small from "./Small";
import "./activity.css";
import { connect } from "react-redux";
class Activity extends Component {
  render() {
    const { arr } = this.props;
    const { id } = this.props.match.params;
    const arr1 = arr.filter((ele) => ele.id == id)[0].huodong[0].huodongcontent;
    return (
      <div className="activity-page">
        {arr1.length ? (
          arr1.map((ele) => (
            <Small
              endtime={ele.endtime}
              biegntime={ele.biegntime}
              num={ele.num}
              fangke={ele.fangke}
              zhuangtai={ele.zhuangtai}
              jiancedian={ele.jiancedian}
              miaoshu={ele.miaoshu}
              name={ele.name}
              leixing={ele.leixing}
              key={ele.id}
            />
          ))
        ) : (
          <span>请添加活动</span>
        )}
      </div>
    );
  }
}
const mapStoreToProps = (state) => {
  return {
    arr: state.arr,
  };
};
export default connect(mapStoreToProps)(Activity);
