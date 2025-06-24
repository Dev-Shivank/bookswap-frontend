import React from 'react';
import { Users, Mic, Globe, Award, Clock, Heart } from 'lucide-react';
import PodcastCardTest from '../components/podcastTest';

const stats = [
  { icon: Mic, label: "Episodes Published", value: "150+" },
  { icon: Clock, label: "Hours Recorded", value: "200+" },
  { icon: Globe, label: "Users Reached", value: "25K+" },
  { icon: Users, label: "Listeners", value: "12K+" },
];



const About = () => {
  return (
    <div className="min-h-screen">

      {/* <PodcastCardTest/> */}

      
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