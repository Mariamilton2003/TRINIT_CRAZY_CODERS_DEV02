import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LandingPage } from "./Pages";
export const App = () => {
  return (
    <>
      <div className="w-full h-full">
        <Router>
          <Routes>
            <Route path="/" Component={LandingPage} />
          </Routes>
        </Router>
      </div>
    </>
  );
};
