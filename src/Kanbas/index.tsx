import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import * as courseClient from "./Courses/client";

import "./styles.css";
import Labs from "../Labs";

import * as userClient from "./Account/client";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";


export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(courses.map((c) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })
  );};

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };

  //const findAllCourses = async () => {...};

  
  const fetchCourses = async () => {
    try {
      const courses = await courseClient.fetchAllCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
 


  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  return (
        <div id="wd-kanbas">
          <KanbasNavigation />
          <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account/*" element={<Account />} />
              <Route path="Dashboard" element={
                <ProtectedRoute>
                <Dashboard 
                 courses={courses} 
                 course={course}
                 setCourse={setCourse}
                 addNewCourse={addNewCourse}
                 deleteCourse={deleteCourse}
                 updateCourse={updateCourse}
                //  addCourse={(newCourse) => setCourses([...courses, newCourse])}            
                      
                  />
                </ProtectedRoute>
              }/>
              <Route path="Courses/:cid/*" element={
                <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute> } />
            </Routes>
          </div>
        </div>
  );}
