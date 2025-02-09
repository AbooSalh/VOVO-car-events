import { Kalnia } from "next/font/google";
import Image from "next/image";

const kalnia = Kalnia({ subsets: ["latin"], weight: "400" });
export default function Hero() {
  return (
    <section className="h-[calc(100vh-72px)] mt-[72px] bg-[#252525]">
      <div className="text-center text-white"></div>

      <div className="flex flex-col lg:flex-row justify-between h-full p-10 ">
        {/* Left Side */}
        <div className="w-full h-full flex-1 lg:flex-auto">
          <HeroHeader />
          <HeroText />
        </div>
        {/* Right Side */}
        <div className="w-full h-full relative">
          <HeroColorBox />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
const HeroHeader = () => {
  return (
    <h2
      className={`text-[40px] text-center -mt-10 block lg:inline lg:text-[128px] text-[#CC0004] leading-none drop-shadow-2xl ${kalnia.className}`}
    >
      Exotic events
    </h2>
  );
};

const HeroText = () => {
  return (
    <p className="text-sm lg:text-xl text-white lg:pr-40 my-5 text-center block lg:text-left">
      Lorem ipsum dolor sit amet consectetur. Velit laoreet risus congue neque.
      Eget lectus tempus tortor morbi id magna nunc consequat. Sem phasellus
      diam enim porttitor.
    </p>
  );
};

const HeroImage = () => {
  return (
    <div className="absolute bottom-0 left-1/2 lg:left-1/4 transform -translate-x-1/2 w-[90%] md:w-[60%] lg:w-[85%] max-w-[900px]">
      <Image
        src="/imgs/home/hero/red-car.png"
        alt="car"
        width={600}
        height={300}
        className="w-full h-auto"
        priority
      />
    </div>
  );
};

const HeroColorBox = () => {
  return (
    <div className="bg-[#E40206] text-white text-opacity-70 w-full h-full float-right text-[80px] md:text-[110px] px-8 md:px-16 relative">
      <div className="hidden lg:block">EXO</div>
      <div className="hidden lg:block float-right translate-y-[-40px] md:translate-y-[-70px]">
        TIC
      </div>
      <div className="lg:hidden text-center">EXOTIC</div>
    </div>
  );
};
