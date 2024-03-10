import { Icon } from "@iconify/react";

const CoursesCard = ({ course }) => {
  return (
    <>
      <div className="bg-mainBg-300 flex flex-col gap-3 p-4 rounded-2xl w-64">
        <div className="relative">
          <img src={course.img} className="rounded-xl w-56 h-56 " />
          <span className="absolute top-[80%] right-0 rounded-3xl text-emerald-700 bg-white p-3 py-2">
            $ {course.price}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <img
              src={course.instructorImg}
              alt=""
              className="w-10 h-10 rounded-full
            "
            />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg">
                {course.instructor}
              </span>
              <span className="font-body font-bold text-sm text-txt-800">
                Instructor
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Icon icon={"mdi:heart"} className={`w-10 h-10 text-rose-600`} />
          </div>
        </div>
        <div className="w-56 font-heading font-bold text-xl text-wrap text-txt-800">
          {course.title}
        </div>
        <div className="flex w-full justify-between">
          <div className="flex gap-2 justify-center items-center">
            <Icon icon={"mi:book"} className="w-8 h-8" />
            {course.moduleLength}
          </div>
          <div className="flex justify-center items-center gap-2">
            <Icon icon={"ion:timer-outline"} className="w-8 h-8" />
            {course.length}
          </div>
        </div>
        <div className="flex">
          <div className="flex gap-1 items-center">
            <Icon
              className="text-yellow-500 w-9 h-9"
              icon={"material-symbols-light:star"}
            />
            <Icon
              className="text-yellow-500 w-9 h-9"
              icon={"material-symbols-light:star"}
            />
            <Icon
              className="text-yellow-500 w-9 h-9"
              icon={"material-symbols-light:star"}
            />
            <Icon
              className="text-yellow-500 w-9 h-9"
              icon={"material-symbols-light:star"}
            />
            <Icon
              className="text-yellow-500 w-9 h-9"
              icon={"material-symbols-light:star"}
            />
            {course.starRating}
          </div>
        </div>
        <div className="block relative bottom-[0%] text-center px-4 py-2 bg-accent-300 w-full rounded-xl text-txt-800">
          Buy Now
        </div>
      </div>
    </>
  );
};

export default CoursesCard;
