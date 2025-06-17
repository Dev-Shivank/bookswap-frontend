import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import Input from '../components/ui/Input';
import { Select, SelectOption } from '../components/ui/Select';
import PodcastCard from '../components/PodcastCard';
import { mockPodcasts } from '../data/mockData';

const categoryInfo = {
  technology: {
    title: "Technology",
    description: "Explore the latest innovations, AI breakthroughs, and tech trends shaping our future.",
    color: "from-blue-600 to-cyan-600",
  },
  business: {
    title: "Business",
    description: "Entrepreneurship, leadership insights, and success stories from industry leaders.",
    color: "from-green-600 to-emerald-600",
  },
  health: {
    title: "Health & Wellness",
    description: "Mental health, fitness, nutrition, and holistic approaches to well-being.",
    color: "from-pink-600 to-rose-600",
  },
  sports: {
    title: "Sports",
    description: "Athletic excellence, coaching wisdom, and inspiring stories from the world of sports.",
    color: "from-orange-600 to-red-600",
  },
  entertainment: {
    title: "Entertainment",
    description: "Creative arts, storytelling, and conversations with entertainers and artists.",
    color: "from-purple-600 to-violet-600",
  },
  spirituality: {
    title: "Spirituality",
    description: "Inner growth, mindfulness, and wisdom from spiritual teachers and practitioners.",
    color: "from-indigo-600 to-purple-600",
  },
};

const Category = () => {
  const { slug } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const category = categoryInfo[slug];

  const categoryPodcasts = useMemo(() => {
    if (!category) return [];

    let filtered = mockPodcasts.filter(
      (podcast) =>
        podcast.category.toLowerCase() === category.title.toLowerCase() ||
        (slug === "health" && podcast.category === "Health")
    );

    if (searchTerm) {
      filtered = filtered.filter(
        (podcast) =>
          podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          podcast.guest?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          podcast.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case "oldest":
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, sortBy, category?.title, slug]);

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <p className="text-gray-600">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className={`bg-gradient-to-br ${category.color} text-white py-20`}>
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">{category.title}</h1>
            <p className="text-xl text-white/90 mb-8">{category.description}</p>
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 inline-block">
              <span className="text-lg font-semibold">{categoryPodcasts.length} Episodes Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-max section-padding py-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder={`Search ${category.title.toLowerCase()} episodes...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Select 
              value={sortBy} 
              onChange={setSortBy}
              className="w-full md:w-48 h-12"
            >
              <SelectOption value="newest">Newest First</SelectOption>
              <SelectOption value="oldest">Oldest First</SelectOption>
              <SelectOption value="title">Title A-Z</SelectOption>
            </Select>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-12">
        <div className="container-max section-padding">
          {categoryPodcasts.length > 0 ? (
            <>
              <div className="mb-8">
                <p className="text-gray-600">
                  {searchTerm
                    ? `Showing ${categoryPodcasts.length} episodes matching "${searchTerm}"`
                    : `All ${category.title} episodes`}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryPodcasts.map((podcast) => (
                  <PodcastCard key={podcast.id} {...podcast} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div
                className={`w-24 h-24 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 opacity-20`}
              >
                <Search className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No episodes found</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm
                  ? `No ${category.title.toLowerCase()} episodes match your search.`
                  : `No ${category.title.toLowerCase()} episodes available yet.`}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-purple-600 hover:text-purple-700"
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Category;
