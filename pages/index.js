import Head from "next/head";
import Header from "../components/header";
import HeroSec from "../components/hero-sec";
import AreaPropertiesSec from "../components/area-properties-sec";
import AreaPropertiesContainer from "../components/area-properties-container";
import RentCardContainer1 from "../components/rent-card-container1";
import RentPropertiesContainer from "../components/rent-properties-container";
import ConatctUs from "../components/conatct-us";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
      <Header />
      <HeroSec />
      <AreaPropertiesSec />
      <AreaPropertiesContainer />
      <RentCardContainer1 />
      <RentPropertiesContainer />
      <ConatctUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
