import React from "react";
import COURSES from "../data/Courses";

const Courses = () => {
  return (
    <div>
      <h2>Courses</h2>
      <div>
        {
            COURSES.map(COURSE => {
                return <Course  key = {COURSE.id} paraCourse={COURSE}/>
            })
        }
      </div>
    </div>
  );
};

const Course = ({ paraCourse }) => {
    const { title, description, image ,link} = paraCourse;
  
    return (
      <div className="card">
        <img src={image} alt={title} style={{ width: "55%" }}></img>
        <h3 style={{ color: "gray", fontSize: 20 }}>{title}</h3>
        <p style={{ fontSize: 17, padding: 4 }}>{description}</p>
        <button onClick={() =>{
            window.location.href  = link;
        }}>Enroll</button>
      </div>
    );
  };

export default Courses;
