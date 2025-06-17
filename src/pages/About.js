import React from 'react';
import { Users, Mic, Globe, Award, Clock, Heart } from 'lucide-react';
import PodcastCardTest from '../components/podcastTest';

const stats = [
  { icon: Mic, label: "Episodes Published", value: "150+" },
  { icon: Clock, label: "Hours Recorded", value: "200+" },
  { icon: Globe, label: "Countries Reached", value: "25+" },
  { icon: Users, label: "Monthly Listeners", value: "50K+" },
];

const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Started as a passion project to share inspiring stories and meaningful conversations.",
  },
  {
    year: "2021",
    title: "Growing Community",
    description: "Reached 10,000 monthly listeners and expanded to multiple platforms.",
  },
  {
    year: "2022",
    title: "International Reach",
    description: "Featured guests from over 15 countries, building a global community.",
  },
  {
    year: "2023",
    title: "Award Recognition",
    description: "Nominated for Best Interview Podcast at the Digital Audio Awards.",
  },
  {
    year: "2024",
    title: "New Horizons",
    description: "Launching video podcasts and expanding into new content formats.",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Host & Founder",
    image: "https://via.placeholder.com/300x300/6366f1/ffffff?text=SJ",
    bio: "Former journalist with 10+ years of experience in storytelling and interviewing.",
  },
  {
    name: "Mike Chen",
    role: "Co-Host",
    image: "https://via.placeholder.com/300x300/10b981/ffffff?text=MC",
    bio: "Tech entrepreneur and thought leader passionate about innovation and human connection.",
  },
  {
    name: "Emma Rodriguez",
    role: "Producer",
    image: "https://via.placeholder.com/300x300/ec4899/ffffff?text=ER",
    bio: "Audio production specialist ensuring every episode delivers exceptional quality.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">

      <PodcastCardTest/>

      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-300 mb-8">
              We believe every person has a story worth telling and every conversation has the power to inspire,
              educate, and connect us all.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-6">
                At THE CELEBRE SHOW, we're dedicated to creating a platform where meaningful conversations flourish. We bring
                together thought leaders, innovators, and inspiring individuals from all walks of life to share their
                insights, experiences, and wisdom.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Our goal is to foster understanding, spark curiosity, and build bridges between different perspectives
                and communities around the world.
              </p>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Authentic Conversations</h3>
                  <p className="text-gray-600">Real stories, genuine connections</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://via.placeholder.com/600x500/6366f1/ffffff?text=Podcast+Studio"
                alt="Podcast recording setup"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to creating meaningful content and building a global community.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to a global platform, here's how we've grown over the years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.year}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind every episode, working to bring you the best conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every conversation we have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
              <p className="text-gray-600">
                We believe in genuine conversations and authentic storytelling that resonates with real experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Diversity</h3>
              <p className="text-gray-600">
                We celebrate diverse perspectives and voices from all backgrounds, cultures, and walks of life.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest quality in every aspect of our content, from audio production to storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;