import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as db from "./Database";
import React, { useState } from "react";

export default function Dashboard({
  courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, addCourse
}: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void;
  addCourse: (newCourse: any) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;


  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";
  
  const [isVisible, setIsVisible] = useState(false);
  const toggleContent = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {isFaculty && (    
        <>
        <br />
          <h5>
            New Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}> Add 
            </button>
            <button className="btn btn-warning float-end me-2"
              onClick={updateCourse} id="wd-update-course-click">
              Update 
            </button>
          </h5>
          <hr />
          <input 
            value={course.name} 
            className="form-control mb-2" 
            onChange={(e) => setCourse({ ...course, name: e.target.value })} 
          />
          <textarea 
            value={course.description} 
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <br />
        </>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> 
      
      <hr />
      {/* A4 3.6 Enrollments */}
      {isStudent &&  <div>
        <button className = "btn btn-primary float-end" onClick={toggleContent}>
          {isVisible ? 'Enrollments' : 'Enrollments'}
        </button>
        {isVisible && (<div>
          <h2>All Courses</h2>
          <div className="row"> {/* Use Bootstrap's grid row */}
            {courses.map((course) => (
              <div className="col-md-4 col-sm-6" style={{ width: "300px" }} key={course._id}> {/* Adjust column sizes */}
                <div className="card rounded-3 overflow-hidden mb-3"> {/* Added margin-bottom for spacing */}
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img
                      src={`/images/${course._id}.jpg`}
                      onError={(e) => (e.currentTarget.src = "/images/darkblue.jpg")}
                      className="card-img-top"
                      style={{ height: "160px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title overflow-hidden" style={{ height: "45px" }}>
                        {course.name}
                      </h5>
                      <p className="wd-dashboard-course-title card-text overflow-hidden" style={{ maxHeight: "100px", overflowY: "hidden" }}>
                        {course.description}
                      </p> 
                      {enrollments.some(enrollment => enrollment.user === currentUser._id && enrollment.course === course._id) ? (
                        <button className="btn btn-danger me-2" onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}>Unenroll</button>
                      ) : (
                        <button className="btn btn-success" onClick={(event) => {
                          event.preventDefault();
                          addCourse(course);
                        }}>Enroll</button>
                      )}
                    </div>
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>

        )}
      <br />
      </div>
      
      }
      
      <div id="wd-dashboard-courses" className="row">
        <br/>
      {isStudent &&<h2>Enrolled Courses</h2>}
        <div className="row row-cols-1 row-cols-md-5 g-4">
         
          {courses
            .filter((course) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              ))
            .map((course) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img
                      src={`/images/${course._id}.jpg`}
                      onError={(e) => (e.currentTarget.src = "/images/darkblue.jpg")}
                      className="card-img-top"
                      style={{ height: "160px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title overflow-y-hidden" style={{ height: "45px" }}>
                        {course.name}
                      </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description}
                      </p>
                      <button className="btn btn-primary">Go</button>

                      {isFaculty && (
                        <div className="float-end">
                          <button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2">
                            Edit
                          </button>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
            <br />
        
        

        </div>
      </div>
    </div>
  );
}
function setIsVisible(arg0: (prevVisible: any) => boolean) {
  throw new Error("Function not implemented.");
}

