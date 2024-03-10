import { Icon } from "@iconify/react";

const HeroSection = () => {
  return (
    <>
      <div className="flex p-7 h-full">
        <div className="w-3/4 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-body font-bold text-xl text-txt-950">
              The Leader in Online Learning.
            </span>
            <span className="w-[30%] font-heading font-bold text-3xl text-wrap text-txt-950">
              Engaging & Accessible Online Courses For All
            </span>
          </div>
          <div className="flex bg-white p-2 px-5 w-3/4 rounded-3xl">
            <input
              type="text"
              className="bg-transparent w-full"
              placeholder="Search courses , tutors , based on the language perfered,etc.."
            />
            <Icon
              icon={"ic:baseline-search"}
              className="bg-gray-700 text-rose-600 w-12 h-12 p-2 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="w-1/4 font-body font-bold text-wrap text-xl text-txt-950">
              Trusted by over 15k Users worldwide since 2023
            </span>
            <div className="flex gap-8">
              <span className="font-heading text-3xl font-bold text-gray-800">
                290+
              </span>
              <span className="flex font-heading font-bold text-3xl text-gray-800">
                4.5
                <div className="ml-3 flex items-center">
                  <Icon
                    className="text-yellow-500 w-10 h-10"
                    icon={"material-symbols-light:star"}
                  />
                  <Icon
                    className="text-yellow-500 w-10 h-10"
                    icon={"material-symbols-light:star"}
                  />
                  <Icon
                    className="text-yellow-500 w-10 h-10"
                    icon={"material-symbols-light:star"}
                  />
                  <Icon
                    className="text-yellow-500 w-10 h-10"
                    icon={"material-symbols-light:star"}
                  />
                  <Icon
                    className="text-yellow-500 w-10 h-10"
                    icon={"material-symbols-light:star"}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[25%] flex justify-center items-center">
          <img src="/heroimg.svg" alt="hero section image" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
