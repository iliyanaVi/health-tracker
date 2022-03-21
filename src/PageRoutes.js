import { useContext } from "react";
import LoginContext from "./context/login-context";

import { Routes, Route, Navigate } from "react-router-dom";

import Main from "./pages/Main/Main";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import WorkoutsPage from "./pages/WorkoutsPage/WorkoutsPage";
import FoodIntakePage from "./pages/FoodIntakePage/FoodIntakePage";
import TrackWeightPage from "./pages/TrackWeightPage/TrackWeightPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function PageRoutes() {
  const loginContext = useContext(LoginContext);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main />} />
        {loginContext.isLoggedIn && (
          <Route path="/track-workouts" element={<WorkoutsPage />} />
        )}
        {loginContext.isLoggedIn && (
          <Route path="/track-food-intake" element={<FoodIntakePage />} />
        )}
        {loginContext.isLoggedIn && (
          <Route path="/track-weight" element={<TrackWeightPage />} />
        )}
        {!loginContext.isLoggedIn && <Route path="/login" element={<LoginPage />} />}
        {!loginContext.isLoggedIn && <Route path="/sign-up" element={<SignUpPage />} />}
        {loginContext.isLoggedIn && <Route path="/profile" element={<ProfilePage />} />}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
export default PageRoutes;
