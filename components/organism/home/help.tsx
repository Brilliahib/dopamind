import Image from "next/image";
import phonecombine from "/public/images/phone-combine.png";
export default function Help() {
  return (
    <>
      <div className="bg-[#C7E4DF] w-3/5 flex flex-row items-center mx-auto rounded-xl p-4">
        <div>
          <h1 className="font-semibold text-5xl">
            Help you find the finest quality of mental health support!
          </h1>
          <p className="md:w-3/4 text-lg mt-4">
            Dopamind offers an extensive range of mental health solutions,
            ensuring you get personalized care. Our advanced emotion recognition
            feature helps match you with the right mental health professional
            for your needs, promising an exceptional therapeutic experience.
          </p>
        </div>
        <Image
          src={phonecombine}
          alt="phone-combine"
          width={250}
          height={250}
        />
      </div>
    </>
  );
}
