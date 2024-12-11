import logo from "/public/images/logo-dopamind.png";

import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row items-center justify-between px-8 mx-auto border-gray-100 shadow-xl border-2 p-2 rounded-full w-2/3 my-8">
        <Image src={logo} alt="logo" height={50} width={50} />
        <ul className="flex flex-row items-center justify-center space-x-16 font-medium">
          <li>Home</li>
          <li>About</li>
          <li>Feature</li>
          <li>Info</li>
        </ul>
      </div>
    </>
  );
}
