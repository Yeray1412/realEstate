import PropCard from "./prop-card";

const props = [
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
  {
    id: 5,
    imgUrl: "https://yeray1412.github.io/realState/property-image4@2x.png",
    name: "Seafront Home in Chicago",
    price: "$ 100,693",
  },
  {
    id: 6,
    imgUrl: "https://yeray1412.github.io/realState/property-image5@2x.png",
    name: "Cozy Cottage",
    price: "$ 780,693",
  },
  {
    id: 7,
    imgUrl: "https://yeray1412.github.io/realState/property-image6@2x.png",
    name: "Charming Bungalow in Sydney Suburb",
    price: "$ 990,693",
  },
];

const LocationSec = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-left text-[14.51px] text-gray-700 font-body-large-400">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[25px] px-[150px]">
        {props.map((prop) => {
          return <PropCard key={prop.id} {...prop} />;
        })}
      </div>
    </div>
  );
};

export default LocationSec;
