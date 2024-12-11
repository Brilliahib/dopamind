import Image from "next/image";
import phonecombine from "/public/images/phone-combine.png";
export default function Help() {
  return (
    <>
      <div className="bg-[#C7E4DF] w-3/5">
        <div>
          <h1></h1>
        </div>
        <Image
          src={phonecombine}
          alt="phone-combine"
          width={150}
          height={150}
        />
      </div>
    </>
  );
}
