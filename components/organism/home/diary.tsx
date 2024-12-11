import Image from "next/image";
import phonediary from "/public/images/phonediary.png";

export default function Diary() {
  return (
    <>
      <div className="bg-[#223C38] my-44 flex flex-row p-12 relative">
        <div className="p-8 pl-28">
          <h1 className="font-semibold text-white text-4xl mb-4">
            Write your diary, then see what mood you&apos;re in!
          </h1>
          <p className="text-white text-xl w-2/3">
            Machine Learning scans analyze every detail, from the diary you
            write to your mood.
          </p>
        </div>
        <div className="relative w-1/2">
          <div className="absolute -bottom-32 right-32">
            <Image
              src={phonediary}
              alt="phonediary"
              width={800}
              height={800}
              className="transform scale-110"
            />
          </div>
        </div>
      </div>
    </>
  );
}
