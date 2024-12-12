import Image from "next/image";

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

type ProfileGridProps = {
  profiles: Array<{ imageSrc: string; name: string; profession: string }>;
};

const ProfileGrid = ({ profiles }: ProfileGridProps) => {
  return (
    <div className="flex flex-row gap-8 items-center justify-center bg-blue-400">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          imageSrc={profile.imageSrc}
          name={profile.name}
          profession={profile.profession}
        />
      ))}
    </div>
  );
};

export default ProfileGrid;
