import React, { useState, useMemo } from 'react';
import { Search, Grid, List } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Select, SelectOption } from '../components/ui/Select';
import PodcastCard from '../components/PodcastCard';
import { mockPodcasts } from '../data/mockData';

const categories = ["All", "Technology", "Business", "Health", "Sports", "Entertainment", "Spirituality"];
const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "title", label: "Title A-Z" },
  { value: "duration", label: "Duration" },
];

const Podcasts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");

  const filteredAndSortedPodcasts = useMemo(() => {
    let filtered = mockPodcasts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (podcast) =>
          podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          podcast.guest?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          podcast.description?.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((podcast) => podcast.category === selectedCategory);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case "oldest":
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        case "title":
          return a.title.localeCompare(b.title);
        case "duration":
          const aDuration = a.duration
            ? parseInt(a.duration.split(":")[0]) * 60 + parseInt(a.duration.split(":")[1])
            : 0;
          const bDuration = b.duration
            ? parseInt(b.duration.split(":")[0]) * 60 + parseInt(b.duration.split(":")[1])
            : 0;
          return bDuration - aDuration;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-max section-padding py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">All Podcasts</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our complete collection of conversations, insights, and stories from amazing guests.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search podcasts, guests, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>

              {/* Category Filter */}
              <Select 
                value={selectedCategory} 
                onChange={setSelectedCategory}
                className="w-full lg:w-48 h-12"
              >
                {categories.map((category) => (
                  <SelectOption key={category} value={category}>
                    {category}
                  </SelectOption>
                ))}
              </Select>

              {/* Sort */}
              <Select 
                value={sortBy} 
                onChange={setSortBy}
                className="w-full lg:w-48 h-12"
              >
                {sortOptions.map((option) => (
                  <SelectOption key={option.value} value={option.value}>
                    {option.label}
                  </SelectOption>
                ))}
              </Select>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-200 rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container-max section-padding">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Showing {filteredAndSortedPodcasts.length} of {mockPodcasts.length} episodes
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Podcast Grid/List */}
          {filteredAndSortedPodcasts.length > 0 ? (
            <div
              className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-6"}
            >
              {filteredAndSortedPodcasts.map((podcast) => (
                <div key={podcast.id} className={viewMode === "list" ? "max-w-4xl" : ""}>
                  <PodcastCard {...podcast} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No podcasts found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSortBy("newest");
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Podcasts;