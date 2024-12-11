import Image from "next/image";

export default function Diary() {
  return (
    <>
      <div className="bg-[#223C38] w-full py-10 sm:py-0 sm:h-[23rem] my-36 flex justify-center items-center pad-x">
        <div className="sm:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter">
            Write your diary, then see what mood you&apos;re in!
          </h1>
          <p className="text-2xl text-white mt-10">
            Machine Learning scans analyze every detail, from the diary you
            write to your mood.
          </p>
        </div>
        <div className="sm:w-1/2 flex relative pr-80">
          <Image
            src="/images/phone-result-predict.png"
            alt="phone-combine"
            width={1000}
            height={800}
            className="mt-10 lg:w-[800px] sm:mt-0 -translate-x-16 sm:translate-x-10 lg:translate-x-20"
          />
          <Image
            src="/images/phone-diary.png"
            alt="phone-combine"
            width={1000}
            height={800}
            className="absolute lg:w-[550px] left-14 sm:left-48 md:left-52 lg:left-72 top-5 z-10"
          />
        </div>
      </div>
    </>
  );
}
