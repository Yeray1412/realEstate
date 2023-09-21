import PropertyLink from "./property-link";

const links = [
  {
    id: 1,
    name: "Centerville",
    url: "https://yeray1412.github.io/realState/card-1@3x.png",
  },
  {
    id: 2,
    name: "Arlington",
    url: "https://yeray1412.github.io/realState/card-2@3x.png",
  },
  {
    id: 3,
    name: "Centerville",
    url: "https://yeray1412.github.io/realState/card-3@3x.png",
  },
  {
    id: 4,
    name: "Arlington",
    url: "https://yeray1412.github.io/realState/card-4@3x.png",
  },
  {
    id: 5,
    name: "Centerville",
    url: "https://yeray1412.github.io/realState/card-5@3x.png",
  },
];

const AreaPropertiesSec = () => {
  return (
    <div className=" flex-1 flex flex-col py-[53px] px-[50px] items-center justify-start gap-[45px] text-center text-21xl text-primary-800 font-body-large-400">
      <div className=" flex flex-col py-0 px-[30px] items-center justify-start gap-[24px] md: md:w-auto">
        <div className=" relative leading-[48px] font-semibold">
          Properties by Area
        </div>
        <div className=" relative text-xl leading-[28px] text-lightslategray">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <div className=" flex-1 flex flex-row flex-wrap py-0 px-2.5 box-border items-start justify-center max-w-[95%px] text-left text-5xl text-gray-white">
        <div className=" flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
          <div className=" flex flex-wrap flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
            {links.map((link) => {
              return <PropertyLink key={link.id} {...link} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaPropertiesSec;
