import { Icon } from "@iconify/react";

const Card = ({ data }) => {
  return (
    <>
      <div className="snap-always snap-center bg-mainBg-200 w-48 h-48 flex flex-col gap-4 p-5 rounded-xl justify-center items-center ">
        <Icon icon={data.icon} className="w-36 h-36" />
        <span className="">{data.text}</span>
      </div>
    </>
  );
};

export default Card;
