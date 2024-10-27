// import { Link } from "react-router-dom";
// export default function Signin() {
//   return (
//     <div id="wd-signin-screen">
//       <h3>Sign in</h3>
//       <input id="wd-username" 
//         placeholder="username" 
//         className="form-control mb-2"/>
//       <input id="wd-password" 
//         placeholder="password" 
//         type="password"
//          className="form-control mb-2"/> 
//       <Link id="wd-signin-btn" 
//         to="/Kanbas/Dashboard"
//         className="btn btn-primary w-100 mb-2">
//         Sign in </Link> 
//       <Link  id="wd-signup-link" to="/Kanbas/Account/Signup"
//         className="btn btn-primary w-100">
//         Sign up</Link>
//     </div>
// );}
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Dashboard");
  };
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <input defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
             className="form-control mb-2" placeholder="username" id="wd-username" />
      <input defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
             className="form-control mb-2" placeholder="password" type="password" id="wd-password" />
      <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100" > Sign in </button>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup"> Sign up </Link>
    </div>
);}
