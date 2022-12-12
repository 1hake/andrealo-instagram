import { YoutubeEmbed } from "./YoutubeEmbed";

type DataObject = {
  id: string;
  name: string;
  instagram: string;
  spotify: string;
  bandcamp: string;
  soundcloud: string;
};

interface YoutubeEmbedProps {
  item: DataObject;
}

export const Card = ({
  item: { name, id, instagram, spotify, bandcamp, soundcloud },
}: YoutubeEmbedProps) => {
  return (
    <div className="w-80">
      <h1 className="text-white text-lg mb-3">{name}</h1>
      <YoutubeEmbed embedId={id} />
      <div className="flex w-full justify-evenly mt-5 gap-4">
        <a href={instagram}>
          <div className="bg-spotifyIcon bg-contain w-6 h-6"></div>
        </a>
        <a href={spotify}>
          <div className="bg-instagramIcon bg-contain w-6 h-6"></div>
        </a>
        <a href={bandcamp}>
          <div className="bg-bandcampIcon bg-contain w-6 h-6"></div>
        </a>
        <a href={soundcloud}>
          <div className="bg-soundcloudIcon bg-contain w-6 h-6"></div>
        </a>
      </div>
    </div>
  );
};
