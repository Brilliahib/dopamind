import Image from "next/image";
import hand from "/public/images/hand.png";
import ProfileGrid from "@/components/molecules/profile/CardProfile";

const profiles = [
  {
    imageSrc: "/images/verry.jpg",
    name: "Verry Kurniawan",
    profession: "Machine Learning",
  },
  {
    imageSrc: "/images/kiki.jpeg",
    name: "Fadli Shidqi F.",
    profession: "Machine Learning",
  },
  {
    imageSrc: "/images/richal.png",
    name: "M. Zidan Richal F. F.",
    profession: "Machine Learning",
  },
  {
    imageSrc: "/images/brilli.jpg",
    name: "M Ahib Ibrilli",
    profession: "Cloud Computing",
  },
  {
    imageSrc: "/images/fino.jpg",
    name: "Finodya Yahdun",
    profession: "Cloud Computing",
  },
  {
    imageSrc: "/images/fino.jpg",
    name: "Namira Nurfaliani",
    profession: "Mobile Development",
  },
  {
    imageSrc: "/images/rayhan.jpg",
    name: "Rayhan Zidany J.",
    profession: "Mobile Development",
  },
];

export default function OurTeam() {
  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <Image src={hand} alt="hand" width={60} height={60} />
        <h1 className="font-semibold text-[#32A08F] underline md:text-5xl text-xl">
          Meet our Team
        </h1>
        <Image
          className="scale-x-[-1]"
          src={hand}
          alt="hand"
          width={60}
          height={60}
        />
      </div>
      <ProfileGrid profiles={profiles} />
    </>
  );
}
