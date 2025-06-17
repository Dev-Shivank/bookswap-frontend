// YouTube API utility functions
export const parseYouTubeDuration = (duration) => {
  // Convert ISO 8601 duration (PT4M13S) to readable format (4:13)
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "0:00";

  const hours = parseInt(match[1] || "0");
  const minutes = parseInt(match[2] || "0");
  const seconds = parseInt(match[3] || "0");

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export const extractGuestFromTitle = (title) => {
  // Enhanced guest name extraction logic
  const patterns = [
    /with\s+([^|]+)/i,
    /ft\.?\s+([^|]+)/i,
    /featuring\s+([^|]+)/i,
    /guest:?\s+([^|]+)/i,
    /interview:?\s+([^|]+)/i,
  ];

  for (const pattern of patterns) {
    const match = title.match(pattern);
    if (match) {
      return match[1].trim().replace(/[^\w\s.-]/g, "");
    }
  }

  return "Special Guest";
};

export const categorizeByTitle = (title, description = "") => {
  const content = `${title} ${description}`.toLowerCase();

  const categories = {
    Technology: ["ai", "tech", "software", "coding", "digital", "innovation", "startup", "quantum"],
    Business: ["business", "entrepreneur", "ceo", "leadership", "marketing", "finance", "investment"],
    Health: ["health", "wellness", "fitness", "mental", "mindfulness", "meditation", "nutrition"],
    Sports: ["sports", "athlete", "olympic", "coach", "training", "championship", "fitness"],
    Entertainment: ["entertainment", "artist", "music", "film", "creative", "storytelling", "art"],
    Spirituality: ["spiritual", "meditation", "mindfulness", "peace", "wisdom", "consciousness"],
  };

  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some((keyword) => content.includes(keyword))) {
      return category;
    }
  }

  return "General";
};

export const fetchYouTubeVideos = async (maxResults = 10, pageToken = "") => {
  try {
    const params = new URLSearchParams({
      maxResults: maxResults.toString(),
      ...(pageToken && { pageToken }),
    });

    const response = await fetch(`/api/youtube?${params}`);

    if (!response.ok) {
      throw new Error("Failed to fetch YouTube videos");
    }

    const data = await response.json();

    const videos = data.items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default.url,
      publishedAt: item.snippet.publishedAt,
      channelTitle: item.snippet.channelTitle,
      duration: item.contentDetails?.duration ? parseYouTubeDuration(item.contentDetails.duration) : undefined,
      viewCount: item.statistics?.viewCount,
    }));

    return {
      videos,
      nextPageToken: data.nextPageToken,
      totalResults: data.pageInfo.totalResults,
    };
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return {
      videos: [],
      totalResults: 0,
    };
  }
};