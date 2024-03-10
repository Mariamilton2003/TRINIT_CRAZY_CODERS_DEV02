import { Link } from "react-router-dom";
import CoursesCard from "./CoursesCard";
import { coursesCardList } from "../ultils/helper";
const FeaturesCourseSection = () => {
  return (
    <>
      <div className=" flex flex-col w-full  bg-linearSecondary">
        <div className="px-24 py-4 flex w-full">
          <div className="flex flex-col w-3/4">
            <span className="font-body font-bold text-rose-600">
              What's New
            </span>
            <span className="font-heading font-bold text-3xl text-gray-100">
              Featured Courses
            </span>
            <span className="font-body text-lg text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              pariatur alias odit corporis, dolores numquam vero repellendus aut
              nulla neque expedita laboriosam rem quibusdam impedit nihil
              laudantium accusantium, veritatis molestias?
            </span>
          </div>
          <div className="flex justify-center my-auto">
            <Link className="font-body text-xl px-4 py-3 outline-1 outline-dashed rounded-xl outline-primary-500 text-primary-500">
              All Courses
            </Link>
          </div>
        </div>
        <div className="flex h-full ">
          <div className="relative px-24 py-4 gap-4 flex flex-wrap overflow-x-auto  ">
            {coursesCardList &&
              coursesCardList
                .slice(0, 8)
                .map((course, i) => <CoursesCard course={course} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesCourseSection;
