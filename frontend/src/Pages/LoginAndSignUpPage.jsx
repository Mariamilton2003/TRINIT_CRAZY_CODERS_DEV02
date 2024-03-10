import { useLocation } from "react-router-dom";
import { Login, NavBar, SignUp } from "../Components";

const LoginAndSignUpPage = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="flex flex-col">
        <div className="fixed top-0 w-full z-10">
          <NavBar />
        </div>
        <div className="relative bg-linearSecondary h-[100vh] flex justify-center items-center">
          {pathname === "/login" ? <Login /> : <SignUp />}
        </div>
      </div>
    </>
  );
};

export default LoginAndSignUpPage;
