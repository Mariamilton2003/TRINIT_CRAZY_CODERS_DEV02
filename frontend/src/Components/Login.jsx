import { useState } from "react";
import { Icon } from "@iconify/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 -z-2 bg-rose-600 w-12 h-12 p-12 rounded-full "></div>
        <div className="absolute top-0 right-0 -z-2 bg-green-700 w-8 h-8 p-12 rounded-full "></div>
        <div className="absolute bottom-0 right-40 -z-2 bg-violet-700 w-8 h-8 p-24 rounded-full "></div>

        <div className="relative z-10 flex flex-col p-6  aspect-video w-96 rounded-xl backdrop-blur-xl bg-white/30 shadow-2xl ring-1 ring-black/5 outline outline-white/40">
          <div className="flex mx-auto font-heading font-bold text-2xl">
            Login
          </div>
          <div className="flex flex-col gap-1 mt-5">
            <label htmlFor="email" className="font-heading text-xl">
              Email:
            </label>
            <input
              onChange={(e) => setEmail(ev.target.value)}
              type="text"
              name="email"
              className="bg-transparent p-2 border-b-2 border-b-rose-700"
            />
          </div>
          <div className="flex flex-col gap-1 mt-5">
            <label htmlFor="pass" className="font-heading text-xl">
              Password:
            </label>
            <div className="flex justify-between border-b-2 border-b-rose-700">
              <input
                onChange={(e) => setEmail(ev.target.value)}
                name="pass"
                type={showPass ? "text" : "password"}
                className="bg-transparent p-2 "
              />
              {showPass ? (
                <Icon
                  icon={"mdi:eye-outline"}
                  className="w-10 h-10 text-gray-600"
                  onClick={() => setShowPass((state) => !state)}
                />
              ) : (
                <Icon
                  icon={"ant-design:eye-invisible-outlined"}
                  className="w-10 h-10 text-gray-600"
                  onClick={() => setShowPass((state) => !state)}
                />
              )}
            </div>
          </div>
          <div className="mt-12 rounded-xl font-Body font-bold text-xl text-center px-3 py-4 w-full shadow-2xl text-white bg-accent-500">
            Login
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
