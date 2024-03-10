import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import { courseList } from "../ultils/helper";
const DetialSection = () => {
  return (
    <>
      <div className="absolute flex w-full h-[100vh] bg-mainBg-50">
        <div className="flex justify-between w-full px-10 py-4 gap-3 absolute -top-10 ">
          <div className="flex justify-center items-center gap-4 p-4 bg-mainBg-300 rounded-xl">
            <Icon
              icon={"fluent:book-20-regular"}
              className="w-12 h-12 text-accent-600"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading text-txt-800">
                10K
              </span>
              <span className="text-md font-body text-txt-800">
                Online Courses
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 p-4 bg-mainBg-300 rounded-xl">
            <Icon
              icon={"game-icons:teacher"}
              className="w-12 h-12 text-accent-600"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading text-txt-800">
                186+
              </span>
              <span className="text-md font-body text-txt-800">
                Expert Tutors
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 p-4 bg-mainBg-300 rounded-xl">
            <Icon
              icon={"eos-icons:trusted-organization"}
              className="w-12 h-12 text-accent-600"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading text-txt-800">
                5K+
              </span>
              <span className="text-md font-body text-txt-800">
                Ceritified Courses
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 p-4 bg-mainBg-300 rounded-xl">
            <Icon
              icon={"fa-solid:user-graduate"}
              className="w-12 h-12 text-accent-600"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading text-txt-800">
                55K+
              </span>
              <span className="text-md font-body text-txt-800">
                Online Students
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-24 px-24 py-4 gap-8 flex w-full">
          <div className="flex flex-col w-3/4">
            <span className="font-body font-bold text-rose-600">
              Favourite Courses
            </span>
            <span className="font-heading font-bold text-3xl text-txt-900">
              Top category
            </span>
            <span className="font-body text-lg text-txt-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              pariatur alias odit corporis, dolores numquam vero repellendus aut
              nulla neque expedita laboriosam rem quibusdam impedit nihil
              laudantium accusantium, veritatis molestias?
            </span>
          </div>
          <div className="flex justify-center my-auto h-full">
            <Link className="font-body text-xl px-4 py-3 outline-1 outline-dashed rounded-xl outline-accent-500 text-accent-500">
              All Categories
            </Link>
          </div>
        </div>
        <div className="flex overflow-hidden">
          <div className="relative top-[60%] flex overflow-x-auto  ">
            <Slider data={courseList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetialSection;
