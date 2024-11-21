import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as courseClient from "../Courses/client";
import * as accountClient from "../Account/client";
import * as enrollmentClient from "./enrollmentsClient";
import { enrollCourse, unenrollCourse } from "./reducer";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  // State and Redux Hooks
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  // Role Determination
  const isStudent = currentUser?.role === "STUDENT";
  const isFaculty = currentUser?.role === "FACULTY";

  // State Variables
  const [localCourses, setLocalCourses] = useState<any[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [loading, setLoading] = useState(false);

  // Effect: Fetch Enrolled Courses
  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      const courses = await accountClient.findMyCourses();
      setEnrolledCourses(courses);
      setLocalCourses(courses);
    };
    fetchEnrolledCourses();
  }, [currentUser]);

  // Handlers
  const handleEnroll = async (courseId: any) => {
    setLoading(true);
    try {
      await enrollmentClient.enrollCourse(currentUser._id, courseId);
      const updatedCourses = await accountClient.findMyCourses();
      setEnrolledCourses(updatedCourses);
      dispatch(enrollCourse({ userId: currentUser._id, courseId }));
    } catch (error) {
      console.error("Enrollment failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUnenroll = async (courseId: string) => {
    try {
      await enrollmentClient.unenrollCourse(currentUser._id, courseId);
      const updatedCourses = await accountClient.findMyCourses();
      setLocalCourses(updatedCourses);
      setEnrolledCourses(updatedCourses);
      dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
    } catch (error) {
      console.error("Unenrollment failed:", error);
    }
  };

  const toggleCourseList = async () => {
    setShowAllCourses((prev) => !prev);
    if (!showAllCourses) {
      const allCourses = await courseClient.fetchAllCourses();
      setLocalCourses(allCourses);
    } else {
      setLocalCourses(enrolledCourses);
    }
  };

  // Render
  return (
    <div id="wd-dashboard">
      <h1>Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      {/* Faculty Controls */}
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={updateCourse}
            >
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

      {/* Student Controls */}
      {isStudent && (
        <button className="btn btn-primary float-end" onClick={toggleCourseList}>
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}

      {/* Course List */}
      <div className="row mt-3">
        <h2>All Courses</h2>
        {localCourses.map((course) => (
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
                  <p
                    className="card-text overflow-y-hidden"
                    style={{ maxHeight: 100 }}
                  >
                    {course.description}
                  </p>
                  <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                    Go
                  </Link>

                  {/* Student Actions */}
                  {isStudent &&
                    (enrolledCourses.some((c) => c._id === course._id) ? (
                      <button
                        className="btn btn-danger float-end"
                        onClick={(event) => {
                          event.preventDefault();
                          handleUnenroll(course._id);
                        }}
                      >
                        Unenroll
                      </button>
                    ) : (
                      <button
                        className="btn btn-success float-end"
                        onClick={(event) => {
                          event.preventDefault();
                          handleEnroll(course._id);
                        }}
                      >
                        Enroll
                      </button>
                    ))}

                  {/* Faculty Actions */}
                  {isFaculty && (
                    <>
                      <button
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-warning me-2 float-end"
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
