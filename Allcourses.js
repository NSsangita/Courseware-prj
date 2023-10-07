import React, { useState } from 'react';
import Course from "./Course";
const Allcourses = () => {
    const [courses,setCourses] =useState([
        {title:"Java course",description:"This is demo course"},
        {title:"Django course",description:"This is demo course"},
        {title:"React js course",description:"This is demo course"},
        {title:"Angular course",description:"This is demo course"},
])
  return (

    <div>
      <h1>Allcourses</h1>
      <p>List of courses are as follows</p>

      {courses.length > 0 
        ? courses.map((item)=> <Course course={item} /> )
        : "No courses"}

    </div>
  )
}

export default Allcourses;

 