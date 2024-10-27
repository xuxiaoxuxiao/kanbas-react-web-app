import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";
import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-account-screen" className="container-fluid mt-4">
      <div className="d-flex">
       
        <div className="d-none d-md-block">
          <AccountNavigation />
        </div>

        <div >
          <Routes>
            <Route path="/" element={<Navigate to={currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin"}/>} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}