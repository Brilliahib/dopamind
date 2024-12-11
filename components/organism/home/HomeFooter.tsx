import Image from "next/image";
import logo from "/public/images/logo.png";

export default function HomeFooter() {
  return (
    <>
      <div className="bg-[#232323] py-16 pad-x text-white">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-x-4">
              <Image
                src={logo}
                alt="logo"
                height={50}
                width={50}
                className="shrink-0 bg-white p-2 rounded-md"
              />
              <h1 className="font-bold md:text-4xl text-3xl">Dopamind +</h1>
            </div>
            <div className="space-y-2">
              <p>Capstone Team CH2-PS262</p>
              <p>@Copyright 2024. All Rights Reserved</p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
