import "./Main.css";

import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const Main = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("dataApi.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="main-container">
      <div className="course-container">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
      <div className="profile-container">
        <h1>Cart</h1>
      </div>
    </div>
  );
};

export default Main;
