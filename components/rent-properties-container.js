import RentCityCard from "./rent-city-card";

const rentCards = [
  {
    id: 1,
    url: "url('https://yeray1412.github.io/realState/card-11@3x.png')",
  },
  {
    id: 2,
    url: "url('https://yeray1412.github.io/realState/card-21@3x.png')",
  },
  {
    id: 3,
    url: "url('https://yeray1412.github.io/realState/card-31@3x.png')",
  },
  {
    id: 4,
    url: "url('https://yeray1412.github.io/realState/card-41@3x.png')",
  },
];

const RentPropertiesContainer = () => {
  return (
    <div className=" flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-body-large-400">
      <div className=" flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
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
        <div className=" flex flex-row flex-wrap items-start justify-center gap-[40px] text-left text-base text-gray-white">
          {rentCards.map((card) => {
            return <RentCityCard key={card.id} {...card} />;
          })}
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-royalblue sm:max-w-full">
        <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </div>
  );
};

export default RentPropertiesContainer;
