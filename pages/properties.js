import "antd/dist/antd.min.css";
import { Dropdown, Pagination } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Header from "../components/header";
import LocationSec from "../components/location-sec";
import Footer from "../components/footer";

const items = [
  {
    key: "item-1",
    label: <a onClick={(e) => e.preventDefault}>Popular properties</a>,
  },
  {
    key: "item-2",
    label: <a onClick={(e) => e.preventDefault}>Latest properties</a>,
  },
  {
    key: "item-3",
    label: <a onClick={(e) => e.preventDefault}>Recommended properties</a>,
  },
];
const PropertiesGridView = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <Header />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url('https://yeray1412.github.io/realState/category@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="relative leading-[72px] font-semibold">
            Properties
          </div>
          <div className="relative text-base leading-[24px] text-whitesmoke-200 font-body-large-400">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col pt-16 px-0 pb-2 items-center justify-start gap-[95px] text-left text-base text-gray-black font-body-large-400 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="w-[272px] flex flex-row items-center justify-start">
          <div className="flex flex-row items-end justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img
                className="relative w-6 h-6"
                alt=""
                src="https://yeray1412.github.io/realState/listbullets.svg"
              />
              <img
                className="relative w-6 h-6"
                alt=""
                src="https://yeray1412.github.io/realState/squaresfour.svg"
              />
            </div>
            <div className="relative leading-[24px]">Sort by:</div>
            <Dropdown menu={{ items }} trigger={["hover"]}>
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <LocationSec />
        <Pagination defaultCurrent={1} total={50} />
      </div>
      <Footer />
    </div>
  );
};

export default PropertiesGridView;
