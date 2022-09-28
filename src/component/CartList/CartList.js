import "./CartList.css";
import dp from "../../images/dp.jpg";

import React from "react";

const CartList = (props) => {
  const { list } = props;

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
      <div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <h2>Exercise Details</h2>
      <div>
        <p>Exercise time:0 Hours</p>
      </div>
    </div>
  );
};

export default CartList;
