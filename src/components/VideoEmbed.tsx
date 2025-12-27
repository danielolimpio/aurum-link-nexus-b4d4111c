interface VideoEmbedProps {
  videoUrl: string;
}

const VideoEmbed = ({ videoUrl }: VideoEmbedProps) => {
  // Extract video ID from YouTube URL
  const getYouTubeId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  if (!videoId) return null;

  return (
    <div className="video-container aspect-video w-full opacity-0 animate-fade-in-up animation-delay-300">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title="AURUM Foundation Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
};

export default VideoEmbed;
