import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input id="wd-username" className="form-control mb-0" value="alice" placeholder="username" /><br/>
      <input id="wd-password" className="form-control mb-0" value="123" placeholder="password"
            /><br/>
      <input id="wd-firstname" className="form-control mb-0" value="Alice" placeholder="First Name" /><br/>
      <input id="wd-lastname" className="form-control mb-0" value="Wonderland" placeholder="Last Name" /><br/>
      <input id="wd-dob" className="form-control mb-1" value="2000-01-01" type="date" /><br/>
      <input id="wd-email" className="form-control mb-0" value="alice@wonderland" type="email" /><br/>
      <select id="wd-role"  className="form-control mb-0" >
        <option className="form-control mb-2" value="USER">User</option>
        <option className="form-control mb-2" value="ADMIN">Admin</option>
        <option className="form-control mb-2" value="FACULTY">Faculty</option>
        <option className="form-control mb-2" value="STUDENT">Student</option>
      </select><br/>
      <Link to="/Kanbas/Account/Signin"  className="btn btn-danger w-100">Sign out</Link>
    </div>
);}
