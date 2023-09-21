import PropertyComp from "./property-comp";

const propComps = [
  {
    id: 1,
    icon: "https://yeray1412.github.io/realState/icon.svg",
    name: "Sell your home",
  },
  {
    id: 2,
    icon: "https://yeray1412.github.io/realState/icon1.svg",
    name: "Rent your home",
    propWidth: "312px",
  },
  {
    id: 3,
    icon: "https://yeray1412.github.io/realState/icon2.svg",
    name: "Buy a home",
  },
  {
    id: 4,
    icon: "https://yeray1412.github.io/realState/icon3.svg",
    name: "Free marketing",
    propWidth: "312px",
  },
];

const AreaPropertiesContainer = () => {
  return (
    <div className=" bg-primary-50 flex flex-col py-[70px] px-0 items-center justify-start text-center text-21xl text-primary-800 font-body-large-400">
      <div className=" flex flex-col pt-[75px] px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px]">
        <div className=" flex flex-col py-0 px-[30px] box-border items-center justify-start gap-[24px] max-w-[95%px]">
          <div className=" relative leading-[48px] font-semibold">
            Properties by Area
          </div>
          <div className=" relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className=" flex flex-row flex-wrap items-center justify-center gap-[86px] text-5xl text-gray-700">
          {propComps.map((prop) => {
            return <PropertyComp key={prop.id} {...prop} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AreaPropertiesContainer;
