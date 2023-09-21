import PropCard from "./prop-card";

const rent = [
  {
    id: 1,
    imgUrl: "https://yeray1412.github.io/realState/property-image@2x.png",
    name: "92 ALLIUM PLACE, ORLANDO FL 32827",
    price: "$ 590,693",
  },
  {
    id: 2,
    imgUrl: "https://yeray1412.github.io/realState/property-image1@2x.png",
    name: "New York Cozy Cottage",
    price: "$ 990,789",
  },
  {
    id: 3,
    imgUrl: "https://yeray1412.github.io/realState/property-image2@2x.png",
    name: "Luxury Penthouse in Dubai Marina",
    price: "$ 890,693",
  },
  {
    id: 4,
    imgUrl: "https://yeray1412.github.io/realState/property-image3@2x.png",
    name: "Premium Home in Berlin",
    price: "$ 990,903",
  },
];

const RentCardContainer1 = () => {
  return (
    <div className=" flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-body-large-400">
      <div className=" flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md: md:w-auto">
          <div className=" relative leading-[48px] font-semibold">
            Latest Properties of Rent
          </div>
          <div className=" relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className=" flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px] text-left text-[14.51px] text-gray-700">
          {rent.map((rents) => {
            return <PropCard key={rents.id} {...rents} />;
          })}
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-darkslateblue sm:max-w-full">
        <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </div>
  );
};

export default RentCardContainer1;
