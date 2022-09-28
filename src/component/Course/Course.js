import "./Course.css";
import React from "react";

const Course = (props) => {
  const { course, handleAddToList } = props;
  const { name, info, img, time } = course;

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
        <button onClick={() => handleAddToList(course)} className="btn-list">
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Course;
