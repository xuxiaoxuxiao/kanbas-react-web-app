import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as db from "./Database";

export default function Dashboard({
  courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, addCourse
}: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void;
  addCourse: (newCourse: any) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrollments, setEnrollments] = useState<any[]>(db.enrollments);
  
  const isStudent = currentUser?.role === "STUDENT";
  const isFaculty = currentUser?.role === "FACULTY";
  const toggleEnrollment = (courseId: string) => {
    if (enrollments.some(enrollment => enrollment.user === currentUser._id && enrollment.course === courseId)) {
      // Unenroll if already enrolled
      setEnrollments(enrollments.filter(enrollment => !(enrollment.user === currentUser._id && enrollment.course === courseId)));
    } else {
      // Enroll if not enrolled
      setEnrollments([...enrollments, { user: currentUser._id, course: courseId }]);
    }
  };
  const [isEnrollmentsVisible, setEnrollmentsVisible] = useState(false);
  const toggleEnrollments = () => {
    setEnrollmentsVisible((prev) => !prev);
  };

  return (
  
  <div id="wd-dashboard">
    <h1>Dashboard</h1>
    <hr />
    {/* Student Version */}
    {isStudent && (<>
      <button className="btn btn-primary float-end" onClick={toggleEnrollments}>
        Enrollments
      </button> 
    {isEnrollmentsVisible && (
      <div className="row mt-3">
        <h2>All Courses</h2>
        {courses.map((course) => (
          <div className="col-md-4 col-sm-6" key={course._id} style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden mb-3">
              <Link
                to={`/Kanbas/Courses/${course._id}/Home`}
                className="text-decoration-none text-dark"
              >
                <img
                  src={`/images/${course._id}.jpg`}
                  onError={(e) => (e.currentTarget.src = "/images/darkblue.jpg")}
                  className="card-img-top"
                  style={{ height: "160px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text overflow-y-hidden" style={{ maxHeight: 100 }}>{course.description}</p>
                  <button
                    className={`btn ${
                      enrollments.some(
                        (enrollment) =>
                          enrollment.user === currentUser._id &&
                          enrollment.course === course._id
                      )
                        ? "btn-danger"
                        : "btn-success"
                    }`}
                    onClick={(event) => {
                      event.preventDefault();
                      toggleEnrollment(course._id);
                    }}
                  >
                    {enrollments.some(
                      (enrollment) =>
                        enrollment.user === currentUser._id &&
                        enrollment.course === course._id
                    )
                      ? "Unenroll"
                      : "Enroll"}
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    )} </>)}
    
    <div id="wd-dashboard-courses" className="row">
        <h2>Enrolled Courses</h2>
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
            </div></div>

</div>
);
}
