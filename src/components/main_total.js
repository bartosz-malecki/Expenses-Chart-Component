import React from "react";
import "./main_total.scss";

const MainTotal = () => {
  return (
    <div className="summary_container">
      <div>
        <label>Total this month</label>
        <div className="total_amount">$478.33</div>
      </div>
      <div>
        <div className="">+2.4%</div>
        <label>from last month</label>
      </div>
    </div>
  );
};

export default MainTotal;
