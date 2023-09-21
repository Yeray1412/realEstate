
import Link from "next/link";

const PropertyLink = ({ name, url }) => {
  return (
    <Link
      className="cursor-pointer [text-decoration:none] w-[200px] flex-[30%] rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-cover bg-no-repeat bg-[top] text-left text-5xl text-gray-white font-body-large-400 md:flex-[unset] md:self-stretch"
      href="/properties"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
        <div className="relative leading-[32px] font-semibold">{name}</div>
        <div className="relative text-base leading-[24px] text-center">
          25 listings
        </div>
      </div>
    </Link>
  );
};

export default PropertyLink;
