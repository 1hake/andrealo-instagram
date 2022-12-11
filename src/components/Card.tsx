import { YoutubeEmbed } from "./YoutubeEmbed";

interface YoutubeEmbedProps {
  embedId: string;
  name: string;
}

export const Card = ({ embedId, name }: YoutubeEmbedProps) => {
  return (
    <div className="w-80">
      <h1 className="text-white text-lg mb-3">{name}</h1>
      <YoutubeEmbed embedId={embedId} />
      <div className="flex w-full justify-evenly mt-5 gap-4">
        <div className="bg-spotifyIcon bg-contain w-6 h-6"></div>
        <div className="bg-instagramIcon bg-contain w-6 h-6"></div>
        <div className="bg-bandcampIcon bg-contain w-6 h-6"></div>
        <div className="bg-soundcloudIcon bg-contain w-6 h-6"></div>
      </div>
    </div>
  );
};
