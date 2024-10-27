// import { Link } from "react-router-dom";
// export default function Profile() {
//   return (
//     <div id="wd-profile-screen">
//       <h3>Profile</h3>
//       <input id="wd-username" className="form-control mb-0" value="alice" placeholder="username" /><br/>
//       <input id="wd-password" className="form-control mb-0" value="123" placeholder="password"
//             /><br/>
//       <input id="wd-firstname" className="form-control mb-0" value="Alice" placeholder="First Name" /><br/>
//       <input id="wd-lastname" className="form-control mb-0" value="Wonderland" placeholder="Last Name" /><br/>
//       <input id="wd-dob" className="form-control mb-1" value="2000-01-01" type="date" /><br/>
//       <input id="wd-email" className="form-control mb-0" value="alice@wonderland" type="email" /><br/>
//       <select id="wd-role"  className="form-control mb-0" >
//         <option className="form-control mb-2" value="USER">User</option>
//         <option className="form-control mb-2" value="ADMIN">Admin</option>
//         <option className="form-control mb-2" value="FACULTY">Faculty</option>
//         <option className="form-control mb-2" value="STUDENT">Student</option>
//       </select><br/>
//       <Link to="/Kanbas/Account/Signin"  className="btn btn-danger w-100">Sign out</Link>
//     </div>
// );}
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kanbas/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };
  useEffect(() => { fetchProfile(); }, []);
  return (
    <div className="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <input defaultValue={profile.username} id="wd-username" className="form-control mb-2"
                 onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>
          <input defaultValue={profile.password} id="wd-password" className="form-control mb-2"
                 onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>
          <input defaultValue={profile.firstName} id="wd-firstname" className="form-control mb-2"
                 onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
          <input defaultValue={profile.lastName} id="wd-lastname" className="form-control mb-2"
                 onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/>
          <input defaultValue={profile.dob} id="wd-dob" className="form-control mb-2"
                 onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/>
          <input defaultValue={profile.email} id="wd-email" className="form-control mb-2"
                 onChange={ (e) => setProfile({ ...profile, email: e.target.value })}/>
                    <select onChange={(e) => setProfile({ ...profile, role:  e.target.value })}
                 className="form-control mb-2" id="wd-role">
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select>
          <button onClick={signout} className="btn btn-danger w-100 mb-2" id="wd-signout-btn">
            Sign out
          </button>
        </div>
      )}
</div>);}
