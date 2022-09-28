import "./Course.css";
import React from "react";

const Course = (props) => {
  const { name, info, img, time } = props.course;

  return (
    <div className="course">
      <div className="course-info">
        <img src={img} alt="" />
        <p className="course-name">{name}</p>
        <p>{info.slice(0, 80)}...</p>
        <p>
          <span className="time">Time required :</span>
          {time}hour
        </p>
        <button className="btn-list">Add to list</button>
      </div>
    </div>
  );
};

export default Course;
