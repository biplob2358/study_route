import "./CartList.css";
import dp from "../../images/dp.jpg";

import React, { useEffect, useState } from "react";

const CartList = (props) => {
  const { list } = props;

  const brakeHander = (value) => {
    localStorage.setItem("brakeTime", JSON.stringify(value));
    setBreak(value);
  };
  const [brake, setBreak] = useState(0);
  useEffect(() => {
    const times = JSON.parse(localStorage.getItem("brakeTime"));
    setBreak(times);
  }, []);

  let total = 0;
  for (const course of list) {
    total = total + course.time;
    console.log(total);
  }

  return (
    <div className="list-container">
      <div className="profile">
        <div className="profile-img">
          <img src={dp} alt="" />
        </div>
        <div className="profile-Name">
          <h4>Biplob Ghosh</h4>
          <p> 🏠 Dhaka,Bangladesh</p>
        </div>
      </div>
      <div className="profile-info">
        <div>
          <p>
            68kg <br /> Weight
          </p>
        </div>
        <div>
          <p>
            5.10' <br />
            Height
          </p>
        </div>
        <div>
          <p>
            22yrs <br />
            Age
          </p>
        </div>
      </div>
      <h2>Add A Break</h2>
      <div className="brake-btn">
        <button onClick={() => brakeHander("15")}>15</button>
        <button onClick={() => brakeHander("20")}>20</button>
        <button onClick={() => brakeHander("25")}>25</button>
        <button onClick={() => brakeHander("30")}>30</button>
        <button onClick={() => brakeHander("35")}>35</button>
      </div>
      <h2>Duration Details</h2>
      <div className="total-time">
        <p>
          Total time: <span className="time">{total}</span> Hours
        </p>
      </div>
      <div className="total-time">
        <p>
          Break time: <span className="time">{brake}</span> minutes
        </p>
      </div>
    </div>
  );
};

export default CartList;
