import Image from "next/image";
import { Quantico } from "next/font/google";

const quantico = Quantico({
    subsets: ["latin"],
    weight: "400"
});
const sponsorsData = ["audi", "bmw", "cat", "redbull", "twitch"];

export default function Sponsors() {
  return (
    <section className="pt-20 md:pt-0">
      <h3 className={`text-center ${quantico.className} text-5xl`}>SPONSORS</h3>
      <div className="flex flex-wrap justify-evenly gap-10 py-20 px-10">
        {sponsorsData.map((sponsor) => (
          <Image
            key={sponsor}
            src={`/imgs/home/sponsors/${sponsor}.svg`}
            alt={sponsor}
            height={150}
            width={150}
          />
        ))}
      </div>
    </section>
  );
}
