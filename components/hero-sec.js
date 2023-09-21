import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const HeroSec = () => {
  const locations = [
    {
      key: "item-1",
      label: <a onClick={(e) => e.preventDefault()}>New York</a>,
    },
    {
      key: "item-2",
      label: <a onClick={(e) => e.preventDefault()}>Texas</a>,
    },
    {
      key: "item-3",
      label: <a onClick={(e) => e.preventDefault()}>California</a>,
    },
  ];

  const props = [
    {
      label: <a onClick={(e) => e.preventDefault()}>Studio apartments</a>,
      key: "item-1",
    },
    {
      label: <a onClick={(e) => e.preventDefault()}>One-bedroom apartments</a>,
      key: "item-2",
    },
    {
      label: <a onClick={(e) => e.preventDefault()}>Two-bedroom apartments</a>,
      key: "item-3",
    },
    {
      label: (
        <a onClick={(e) => e.preventDefault()}>Three-bedroom apartments</a>
      ),
      key: "item-4",
    },
  ];

  const range = [
    {
      key: "item-1",
      label: <a onClick={(e) => e.preventDefault()}>500$-1000$</a>,
    },
    {
      key: "item-2",
      label: <a onClick={(e) => e.preventDefault()}>2000$</a>,
    },
    {
      key: "item-3",
      label: <a onClick={(e) => e.preventDefault()}>4000$</a>,
    },
  ];

  const router = useRouter();

  const onSearchCTAClick = useCallback(() => {
    router.push("/properties");
  }, [router]);

  return (
    <div className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url('https://yeray1412.github.io/realState/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
          <div className="self-stretch relative leading-[72px] font-semibold">
            Find Your Dream Home
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-primary-50">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[17px] text-left text-base text-primary-700 font-body-large-400">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start hover:bg-darkslateblue">
              <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
                Rent
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-3 px-6 bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start">
              <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-primary-400 text-center">
                Sale
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
            <div className="flex-1 rounded-lg bg-gray-white flex flex-row py-8 px-[62px] box-border items-center justify-between max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
              <div className="w-[137px] flex flex-col items-start justify-start gap-[16px] text-center">
                <Dropdown menu={{ items: locations }} trigger={["hover"]}>
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select your city `}
                    <DownOutlined />
                  </a>
                </Dropdown>
                <div className="relative leading-[24px] capitalize font-semibold">
                  Locations
                </div>
              </div>
              <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative leading-[24px] capitalize font-semibold flex items-end w-[150px]">
                  Property Type
                </div>
                <Dropdown
                  className="self-stretch"
                  menu={{ items: props }}
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select property type `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative leading-[24px] capitalize font-semibold flex items-end w-[150px]">
                  Rent Range
                </div>
                <Dropdown
                  className="self-stretch"
                  menu={{ items: range }}
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select rent range `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <button
                className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded w-[102px] flex flex-row box-border items-center justify-center hover:bg-darkslateblue md:w-full md:hover:items-center md:hover:justify-center sm:self-stretch sm:w-auto sm:max-w-full sm:hover:self-stretch sm:hover:w-auto sm:hover:max-w-full"
                onClick={onSearchCTAClick}
              >
                <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
                  Search
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
