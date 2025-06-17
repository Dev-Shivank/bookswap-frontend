import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  ArrowRight,
  Star,
  TrendingUp,
  Sparkles,
  Crown,
  Youtube,
  Instagram,
  Facebook,
} from "lucide-react";

import Button from "../components/ui/Button";
import PodcastCard from "../components/PodcastCard";
import { mockPodcasts, categories } from "../data/mockData";

const Home = () => {
  const [featuredPodcast] = useState(mockPodcasts[0]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-800 text-white overflow-hidden">
        {/* Multi-layered Animated Background */}
        <div className="absolute inset-0">
          {/* Primary floating orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-400/30 to-yellow-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-400/25 to-amber-400/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-amber-300/20 to-yellow-300/20 rounded-full blur-2xl animate-bounce delay-500"></div>

          {/* Secondary layer - moving gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent animate-pulse delay-2000"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 via-transparent to-amber-400/5 animate-pulse delay-3000"></div>

          {/* Geometric patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-amber-300/30 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-yellow-300/30 rounded-full animate-spin-slow delay-1000 animate-reverse"></div>
          </div>
        </div>

        {/* Floating luxury particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-float ${
                i % 3 === 0
                  ? "w-3 h-3 bg-amber-300/40"
                  : i % 3 === 1
                  ? "w-2 h-2 bg-yellow-300/50"
                  : "w-1 h-1 bg-amber-200/60"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Luxury overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-yellow-900/20" />

        <div className="relative container-max section-padding py-10 lg:py-15">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-amber-200">
                  <Crown className="h-5 w-5" />
                  <span className="text-sm font-medium tracking-wider uppercase">
                    Premium Podcast Experience
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
                  Where Stories
                  <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent animate-shimmer">
                    Come Alive
                  </span>
                </h1>

                <p className="text-xl text-amber-100 max-w-lg leading-relaxed font-light">
                  Discover engaging conversations, inspiring stories, and
                  thought-provoking discussions from our diverse range of
                  premium podcast episodes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:from-amber-700 hover:via-yellow-600 hover:to-amber-700 text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  <Play className="mr-2 h-5 w-5" fill="currentColor" />
                  Play Now
                </Button> */}
                <Link to="/podcasts">
                  <Button
                    size="lg"
                    variant="outline"
                  className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:from-amber-700 hover:via-yellow-600 hover:to-amber-700 text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 font-semibold"
                  >
                    Explore Episodes
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-amber-200 group-hover:text-amber-100 transition-colors">
                    67+
                  </div>
                  <div className="text-sm text-amber-300 font-medium">
                    Episodes
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-amber-200 group-hover:text-amber-100 transition-colors">
                    35K+
                  </div>
                  <div className="text-sm text-amber-300 font-medium">
                    Listeners
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-amber-200 group-hover:text-amber-100 transition-colors">
                    25+
                  </div>
                  <div className="text-sm text-amber-300 font-medium">
                    Guests
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Featured Podcast Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-3xl blur-xl animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-amber-300/30 shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 transform hover:scale-105">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center space-x-1">
                    <Star
                      className="h-5 w-5 text-amber-300"
                      fill="currentColor"
                    />
                    <Star
                      className="h-4 w-4 text-amber-400"
                      fill="currentColor"
                    />
                    <Star
                      className="h-3 w-3 text-amber-500"
                      fill="currentColor"
                    />
                  </div>
                  <span className="text-sm font-semibold tracking-wider text-amber-200">
                    THE CÉLÈBRE SHOW
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden mb-6 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img
                    src="/celebre-show-hero.png"
                    alt={featuredPodcast.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute bottom-4 left-4 z-20"></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-amber-100">
                    <p className="text-sm font-medium">Latest Episode</p>
                    <p className="text-xs text-amber-300">Premium Content</p>
                  </div>
                  <Sparkles className="h-6 w-6 text-amber-300 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





















      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-cream-50 to-amber-50 relative overflow-hidden geometric-gold-bg">
        <div className="relative container-max section-padding">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
              <Crown className="h-6 w-6 text-amber-600" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-amber-900">
              Explore by Category
            </h2>
            <p className="text-amber-700 max-w-2xl mx-auto text-lg leading-relaxed">
              Dive into topics that matter to you. From technology and business
              to health and spirituality.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon; // ← get the icon component

              return (
                <Link
                  key={category.name}
                  to={`/category/${category.name.toLowerCase()}`}
                  className="group"
                >
                  <div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 group-hover:scale-110 border border-amber-200/50 hover:border-amber-300 relative overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-yellow-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300 transform group-hover:rotate-12`}
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="font-bold mb-2 text-amber-900 group-hover:text-amber-800 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-amber-600 font-medium">
                        {category.count} episodes
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category-wise Podcasts */}
      <section className="py-20 relative overflow-hidden geometric-rich-gold-bg">
        <div className="relative container-max section-padding">
          {categories.map((category, categoryIndex) => {
            const categoryPodcasts = mockPodcasts.filter(
              (podcast) =>
                podcast.category.toLowerCase() === category.name.toLowerCase()
            );

            if (categoryPodcasts.length === 0) return null;

            return (
              <div key={category.name} className="mb-20 last:mb-0">
                {/* Enhanced Category Header */}
                <div className="flex items-center justify-between mb-12 group">
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl">
                        <TrendingUp className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-serif font-bold text-amber-400 mb-1">
                        {category.name}
                      </h2>
                      <p className="text-amber-600 font-medium">
                        {categoryPodcasts.length} Episodes
                        {categoryPodcasts.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                  <Link to={`/category/${category.name.toLowerCase()}`}>
                    <Button
                      variant="outline"
                      className="hidden sm:flex border-2 border-amber-300 text-amber-400 hover:bg-amber-100 hover:border-amber-400 rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:scale-105"
                    >
                      View All {category.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                {/* Enhanced Category Podcasts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {categoryPodcasts.slice(0, 4).map((podcast, index) => (
                    <div
                      key={podcast.id}
                      className="transform hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <PodcastCard {...podcast} />
                    </div>
                  ))}
                </div>

                {/* Mobile View All Button */}
                <div className="text-center mt-8 sm:hidden">
                  <Link to={`/category/${category.name.toLowerCase()}`}>
                    <Button
                      variant="outline"
                      className="border-2 border-amber-300 text-amber-800 hover:bg-amber-100 rounded-full px-6 py-3 font-semibold"
                    >
                      View All {category.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-800 text-white relative overflow-hidden">
        {/* Spectacular animated background */}
        <div className="absolute inset-0">
          {/* Primary luxury orbs */}
          <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-amber-400/25 to-yellow-400/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-amber-300/15 to-yellow-300/15 rounded-full blur-2xl animate-bounce delay-500"></div>

          {/* Luxury light rays */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent animate-pulse delay-2000"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/8 via-transparent to-amber-400/8 animate-pulse delay-3000"></div>

          {/* Premium geometric patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-15">
            <div className="absolute top-1/4 left-1/4 w-40 h-40 border-2 border-amber-300/40 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-yellow-300/40 rounded-full animate-spin-slow delay-1000 animate-reverse"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-amber-200/40 rounded-full animate-spin-slow delay-2000"></div>
          </div>
        </div>

        <div className="relative container-max section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="h-6 w-6 text-amber-300 animate-pulse" />
              <span className="text-amber-200 font-medium tracking-wider uppercase text-sm">
                Exclusive Access
              </span>
              <Sparkles className="h-6 w-6 text-amber-300 animate-pulse" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-amber-100">
              Never Miss an Episode
            </h2>
            <p className="text-amber-200 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
              Join us on YouTube, Instagram & Facebook for exclusive episodes,
              behind-the-scenes stories, and early previews from The Célèbre
              Show.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* YouTube Button */}
              <a
                href="https://www.youtube.com/@thecelebreshoww"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  type="button"
                  className="bg-[#FF0000] hover:bg-[#cc0000] text-white rounded-full px-8 py-4 font-semibold shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <Youtube className="h-5 w-5" />
                  <span>Subscribe on YouTube</span>
                </Button>
              </a>

              {/* Instagram Button */}
              <a
                href="https://www.instagram.com/thecelebreshoww"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  type="button"
                  className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white rounded-full px-8 py-4 font-semibold shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Follow on Instagram</span>
                </Button>
              </a>

              {/* Facebook Button */}
              <a
                href="https://www.facebook.com/share/1CjzbjHw4u/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  type="button"
                  className="bg-[#1877F2] hover:bg-[#145dbf] text-white rounded-full px-8 py-4 font-semibold shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <Facebook className="h-5 w-5" />
                  <span>Like on Facebook</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
