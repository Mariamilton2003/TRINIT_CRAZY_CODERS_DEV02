import Card from "./Card";

const Slider = ({ data }) => {
  return (
    <>
      <div className=" flex gap-12 mx-24 animate-marquee-infinite">
        {data && data.map((data, i) => <Card key={i} data={data} />)}
      </div>
    </>
  );
};

export default Slider;
