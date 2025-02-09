import { Kalnia } from "next/font/google";
import Image from "next/image";

const kalnia = Kalnia({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <section className="h-[calc(100vh-72px)] mt-[72px] bg-[#252525]">
      <div className="text-center text-white"></div>

      <div className="flex flex-col md:flex-row justify-between h-full p-10">
        {/* Left Side */}
        <div className="w-full h-full">
          <h2
            className={`text-[64px] md:text-[128px] text-[#CC0004] leading-none drop-shadow-2xl ${kalnia.className}`}
          >
            Exotic events
          </h2>
          <p className="text-lg md:text-xl text-white md:pr-40 mt-10">
            Lorem ipsum dolor sit amet consectetur. Velit laoreet risus congue
            neque. Eget lectus tempus tortor morbi id magna nunc consequat. Sem
            phasellus diam enim porttitor.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full h-full relative">
          {/* Color Box */}
          <div className="bg-[#E40206] text-white text-opacity-70 w-[90%] h-full float-right text-[80px] md:text-[110px] px-8 md:px-16">
            <div>EXO</div>
            <div className="float-right translate-y-[-40px] md:translate-y-[-70px]">
              TIC
            </div>
          </div>

          {/* Car Image (Bigger & Responsive) */}
          <div className="absolute top-1/3 w-full md:w-[90%] lg:w-[85%] max-w-[900px]">
            <Image
              src="/imgs/home/hero/red-car.png"
              alt="car"
              width={700} // Increased width
              height={300} // Increased height
              className="w-full h-auto" // Ensures full responsiveness
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
