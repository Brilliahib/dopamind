import Image from "next/image";
import phone from "/public/images/phone.png";
import { Button } from "@/components/ui/button";
import element from "/public/images/element.png";
import bubbleleft from "/public/images/bubble-left.png";
import bubbleright from "/public/images/bubble-right.png";

export default function Homepage() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center mx-auto space-y-8 bg-cover bg-center"
        style={{
          backgroundImage: `url(${element.src})`,
          backgroundSize: "90%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 className="md:text-3xl text-xl font-semibold text-center md:w-2/5 tracking-wider">
          “Taking care of your mental health is the best decision you can make.”
        </h1>
        <p className="md:w-2/3 text-center">
          Dopamind helps you track and enhance your mental wellbeing. Taking
          care of mental health isn&apos;t just a choice. It&apos;s an
          investment in yourself. Every step toward better mental health brings
          you closer to your best self.
        </p>
        <Button className="bg-transparent text-black border-2 border-black rounded-lg hover:text-white">
          Dopamind App
        </Button>
        <div className="relative">
          <Image src={phone} alt="phone" width={300} height={300} />
          <Image
            src={bubbleleft}
            alt="bubble left"
            width={200}
            height={200}
            className="absolute bottom-20 left-[-160px] max-w-xs"
          />
          <Image
            src={bubbleright}
            alt="bubble right"
            width={200}
            height={200}
            className="absolute top-20 right-[-190px]"
          />
        </div>
      </div>
    </>
  );
}
