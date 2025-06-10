import Image from 'next/image';

type TeamMemberCardProps = {
  name: string;
  title: string;
  imageUrl: string;
};

export default function TeamMemberCard({ name, title, imageUrl }: TeamMemberCardProps) {
  return (
    <div className="text-center">
      <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4">
        <Image
          src={imageUrl}
          alt={`Photo of ${name}`}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="text-blue-300">{title}</p>
    </div>
  );
}