import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LandingPage, LoginAndSignUpPage } from "./Pages";
export const App = () => {
  return (
    <>
      <div className="w-full h-full">
        <Router>
          <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/login" Component={LoginAndSignUpPage} />
            <Route path="/register" Component={LoginAndSignUpPage} />
          </Routes>
        </Router>
      </div>
    </>
  );
};
