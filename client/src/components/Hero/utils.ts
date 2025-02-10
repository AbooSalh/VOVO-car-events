export const heroCars : Car[]= [
  {
    name: "EXOTIC",
    color: "#CC0004",
    img: "/imgs/home/hero/exotic.png",
    description:
      "Feel the adrenaline of high-performance supercars built for speed and precision. With sleek designs and cutting-edge engineering, these machines offer an unmatched driving experience on the road or track.",
  },
  {
    name: "CLASSIC",
    color: "#004E5C",
    img: "/imgs/home/hero/classic.png",
    description:
      "Timeless elegance meets automotive heritage. Classic cars embody history, craftsmanship, and nostalgia, turning heads with their vintage charm and enduring appeal.",
  },
  {
    name: "STANCE",
    color: "#2383BA",
    img: "/imgs/home/hero/stance.png",
    description:
      "Low, wide, and bold—stance cars are all about style and individuality. With aggressive suspensions and custom designs, these cars make a statement wherever they roll.",
  },
];
export interface Car {
  name: string;
  description: string;
  img: string;
  color: string;
}
