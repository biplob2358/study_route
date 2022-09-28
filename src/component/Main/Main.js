import "./Main.css";

import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import CartList from "../CartList/CartList";

const Main = () => {
  const [courses, setCourses] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("dataApi.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleAddToList = (course) => {
    // console.log(course);
    const newList = [...list, course];
    setList(newList);
  };

  return (
    <div className="main-container">
      <div className="course-container">
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            handleAddToList={handleAddToList}
          ></Course>
        ))}
      </div>
      <div className="profile-container">
        <CartList list={list}></CartList>
      </div>
    </div>
  );
};

export default Main;
