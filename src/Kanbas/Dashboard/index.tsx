import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  // State and Redux Hooks
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const dispatch = useDispatch();

  // Role Determination
  const isStudent = currentUser?.role === "STUDENT";
  const isFaculty = currentUser?.role === "FACULTY";


  // Render
  return (
    <div id="wd-dashboard">
      <h1>Dashboard</h1>
      <hr />
      <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
      </button><br />

      <hr />
      <br />
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
      {/* {isStudent && (
        // <button className="btn btn-primary float-end" onClick={toggleCourseList}>
        //   {showAllCourses ? "Enrollment" : "All Courses"}
        // </button>
        <button
          onClick={() => setEnrolling(!enrolling)}
          className="float-end btn btn-primary"
        >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      )} */}

      {/* Course List */}
      <h2 id="wd-dashboard-published">
        {enrolling
          ? "Published Courses (" + courses.length + ")"
          : "Enrolled Courses (" + courses.length + ")"}
      </h2>{" "}
      <div className="row mt-3">
        <h2>All Courses</h2>
        {/* changed from localCourses to courses */}
        {courses.map((course) => (
          <div className="col-md-4 col-sm-6" key={course._id} style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden mb-3">
              <Link
                to={`/Kanbas/Courses/${course._id}/Home`}
                className="text-decoration-none text-dark"
              >
                <img
                  src={`/images/${course.number}.jpg`}
                  onError={(e) => (e.currentTarget.src = "/images/darkblue.jpg")}
                  className="card-img-top"
                  style={{ height: "160px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                  
                    {course.name}</h5>
                  <p
                    className="card-text overflow-y-hidden"
                    style={{ maxHeight: 100 }}
                  >
                    {course.description}
                  </p>
                  {isStudent && enrolling && (
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        updateEnrollment(course._id, !course.enrolled);
                      }}
                      className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`}
                    >
                      {course.enrolled ? "Unenroll" : "Enroll"}
                    </button>
                  )}
                  <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                    Go
                  </Link>

                  {/* Student Actions
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
                    ))} */}

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
