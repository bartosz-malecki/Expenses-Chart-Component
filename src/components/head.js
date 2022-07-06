import React from "react";
import "./head.scss";

const Head = () => {
  return (
    <div className="head_container">
      <div>
        <label>My balance</label>
        <div className="balance_amount">$921.48</div>
      </div>
      <div>
        <div className="circle_1"></div>
        <div className="circle_2"></div>
      </div>
    </div>
  );
};

export default Head;
