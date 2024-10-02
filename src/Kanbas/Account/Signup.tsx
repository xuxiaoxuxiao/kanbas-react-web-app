import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="form-control mb-2"/><br/>
      <input placeholder="password" type="password"  className="form-control mb-2"/><br/>
      <input placeholder="verify password" type="password"  className="form-control mb-2" /><br/>
      
      <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100 mb-2">Sign up</Link>
      <br />
      
      <Link to="/Kanbas/Account/Signin" className="btn btn-primary w-100" >Sign in</Link>
    </div>
);}
