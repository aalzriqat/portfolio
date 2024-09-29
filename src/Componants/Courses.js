import React from "react";
import COURSES from "../data/Courses";

const Courses = () => {
  return (
    <div className="container">
      <h2>Courses</h2>
      <div className="row">
        {COURSES.map(COURSE => (
          <Course key={COURSE.id} paraCourse={COURSE} />
        ))}
      </div>
    </div>
  );
};

const Course = ({ paraCourse }) => {
  const { title, description, image, link } = paraCourse;

  return (
    <div className="card">
      <img src={image} alt={title} className="course-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => window.location.href = link}>
        Enroll
      </button>
    </div>
  );
};

export default Courses;