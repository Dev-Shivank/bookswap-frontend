import { Play, User } from 'lucide-react';

const PodcastCard = ({
  id,
  title,
  thumbnail,
  guest,
  channelTitle,
}) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const extractGuestName = (title) => {
    const patterns = [/with\s+([^|]+)/i, /ft\.?\s+([^|]+)/i, /featuring\s+([^|]+)/i];

    for (const pattern of patterns) {
      const match = title.match(pattern);
      if (match) {
        return match[1].trim();
      }
    }
    return guest || "Special Guest";
  };

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden card-hover">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={`https://youtube.com/watch?v=${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-4 transform hover:scale-110 transition-all duration-200"
          >
            <Play className="h-6 w-6 ml-1" fill="currentColor" />
          </a>
        </div>


       
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
          <User className="h-4 w-4" />
          <span>{extractGuestName(title)}</span>
         
         
        </div>

        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{channelTitle}</span>
          <a
            href={`https://youtube.com/watch?v=${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            Watch Now →
          </a>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;