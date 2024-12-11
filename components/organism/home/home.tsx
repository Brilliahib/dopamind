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
        className="flex flex-col items-center justify-center mx-auto space-y-8 bg-cover bg-center pad-x md:min-h-0 min-h-80vh"
        style={{
          backgroundImage: `url(${element.src})`,
          backgroundSize: "90%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter max-w-xl text-center">
          “Empower Your Life, Prioritize Your Mind”
        </h1>
        <p className="max-w-xl text-center">
          Dopamind helps you track and enhance your mental wellbeing. Taking
          care of mental health isn&apos;t just a choice. It&apos;s an
          investment in yourself. Every step toward better mental health brings
          you closer to your best self.
        </p>
        <Button className="bg-transparent text-black border rounded-lg hover:text-white hover:bg-green-500 border-green-500">
          Dopamind App
        </Button>
        <div className="relative">
          <Image src={phone} alt="phone" width={330} height={330} />
          <Image
            src={bubbleleft}
            alt="bubble left"
            width={200}
            height={200}
            className="absolute top-44 left-[-160px] max-w-xs hidden md:block"
          />
          <Image
            src={bubbleright}
            alt="bubble right"
            width={200}
            height={200}
            className="absolute top-20 right-[-190px] hidden md:block"
          />
        </div>
      </div>
    </>
  );
}
