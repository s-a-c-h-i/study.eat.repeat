import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [credit, setCredit] = useState("");
  const navigate = useNavigate();
  const handleAddCourse = (e) => {
    e.preventDefault();
    if (!courseName || !credit) return;

    const newCourse = {
      name: courseName.trim(),
      credit: parseFloat(credit),
    };

    setCourses([...courses, newCourse]);
    setCourseName("");
    setCredit("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">📚 My Courses</h1>

      {/* Course Form */}
      <form
        onSubmit={handleAddCourse}
        className="bg-white max-w-md mx-auto rounded-lg shadow-md p-6 mb-10"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Course Name</label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="e.g. Data Structures"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Credits</label>
          <input
            type="number"
            value={credit}
            onChange={(e) => setCredit(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="e.g. 4"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Course
        </button>
      </form>

      {/* Courses List */}
      <div className="max-w-2xl mx-auto" onClick={()=>{navigate("/chapters")}}>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Added Courses:</h2>
        {courses.length === 0 ? (
          <p className="text-gray-500">No courses added yet.</p>
        ) : (
          <ul className="space-y-3">
          
            {courses.map((course, index) => (
              <li
                key={index}
                className="bg-white px-4 py-3 rounded-md shadow flex justify-between items-center"
              >
                
                <span className="font-medium" >{course.name}</span>
                <span className="text-sm text-gray-500">{course.credit} Credits</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
