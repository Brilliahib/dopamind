import Image from "next/image";
import hand from "/public/images/hand.png";

type ProfileCardProps = {
  imageSrc: string;
  name: string;
  profession: string;
};

const ProfileCard = ({ imageSrc, name, profession }: ProfileCardProps) => {
  return (
    <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-2xl border-gray-200 border">
      <Image
        src={imageSrc}
        alt="Profile Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded-lg px-4 py-2">
        <h1 className="text-black font-bold text-sm">{name}</h1>
        <h1 className="text-black text-sm">{profession}</h1>
      </div>
    </div>
  );
};

const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

type ProfileGridProps = {
  profiles: Array<{ imageSrc: string; name: string; profession: string }>;
};

const ProfileGrid = ({ profiles }: ProfileGridProps) => {
  const chunkedProfiles = chunkArray(profiles, 4);

  return (
    <div className="space-y-24">
      <div className="flex items-center justify-center">
        <Image src={hand} alt="hand" width={50} height={50} />
        <h1 className="font-semibold text-[#32A08F] underline md:text-5xl text-xl">
          Meet our Team
        </h1>
        <Image
          className="scale-x-[-1]"
          src={hand}
          alt="hand"
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col gap-8 items-center justify-center">
        {chunkedProfiles.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex md:flex-row flex-col gap-16 items-center justify-center"
          >
            {row.map((profile, index) => (
              <ProfileCard
                key={index}
                imageSrc={profile.imageSrc}
                name={profile.name}
                profession={profile.profession}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileGrid;
