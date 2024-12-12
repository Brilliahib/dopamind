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
    imageSrc: "/images/logo.png",
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
      <ProfileGrid profiles={profiles} />
    </>
  );
}
