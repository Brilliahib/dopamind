import Image from "next/image";
export default function Help() {
  return (
    <>
      <div className="pad-x">
        <div className="flex flex-col md:flex-row bg-[#C7E4DF]/50 lg:p-12 lg:py-24 md:py-10 py-10 md:p-16 p-8 rounded-3xl">
          <div className="md:w-1/2 flex flex-col justify-center md:mb-0 mb-6">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter">
              Help you find the finest quality of mental health support!
            </h1>
            <p className="text-2xl mt-10">
              Dopamind offers an extensive range of mental health solutions,
              ensuring you get personalized care. Our advanced emotion
              recognition feature helps match you with the right mental health
              professional for your needs, promising an exceptional therapeutic
              experience.
            </p>
          </div>
          <div className="md:w-1/2 flex relative justify-center">
            <Image
              src="/images/phone-predict.png"
              alt="phone-combine"
              width={1000}
              height={1000}
              className="md:absolute w-36 lg:w-72 -rotate-12 top-8 left-20 z-10 lg:top-0"
            />
            <Image
              src="/images/phone-chat.png"
              alt="phone-combine"
              width={1000}
              height={1000}
              className="md:absolute w-36 lg:w-72 rotate-0 top-40 lg:top-28 left-44 lg:left-80"
            />
          </div>
        </div>
      </div>
    </>
  );
}
