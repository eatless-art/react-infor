import React, { Component } from "react";
import "./home.css";
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-word">
          <h2>SunMedia监测系统已正式上线，感谢您的使用！</h2>
          <p>
            经过精心的研发，SunMedia采用最新的国际化监测理念研发成功的监测系统已正式上线，在此过程中您如果遇到任何问题或有任何意见或建议，请随时点击最上方的“联系我们”或点击这里来给我们留言。
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
