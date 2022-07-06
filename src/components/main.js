import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import "./main.scss";

const Main = () => {
  return (
    <div className="main_container">
      <div>
        <h1>Spending - Last 7 days</h1>
      </div>
      <div>wykres</div>
      <hr></hr>
      <div>
        <div>
          <label>Total this month</label>
          <span>$478.33</span>
        </div>
        <div>
          <span>+2.4%</span>
          <span>from last month</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
