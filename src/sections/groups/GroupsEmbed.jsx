'use client';

import { useState } from 'react';
import { Container } from '@/components/Container';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const embeds = [
  {
    title: 'Event Schedule',
    description: 'Display your full event schedule with filtering, search, and real-time seat availability. Players can view details and claim seats directly from the embed.',
    src: 'https://aftergame.app/events/654c2bd1-7447-423e-bd50-64a50326438b/schedule?mode=embed',
  },
  {
    title: 'Community Events',
    description: 'Showcase all upcoming events and game nights for your community. Members can browse and join directly from your website.',
    src: 'https://aftergame.app/groups/village-meeple-board-game-c-4375/events?mode=embed',
  },
  {
    title: 'Game Library',
    description: 'Share your collection or event game list. Let players know what\'s available to play and discover new games.',
    src: 'https://aftergame.app/events/19a549af-20fd-4b98-9eea-fbbcca4adb2a/lists/12ae5074-b1f1-4f90-96c5-e03833189929?mode=embed',
  },
];

export function GroupsEmbed() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % embeds.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + embeds.length) % embeds.length);
  };

  return (
    <section
      id="embeds"
      aria-label="Embeddable components"
      className="py-20 sm:py-32 bg-gray-50"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-medium tracking-tight text-gray-900">
            Embed Aftergame <span className='text-gg-blue font-semibold'>anywhere</span>
          </h2>
          <p className="mt-4 mx-6 text-lg text-gray-600">
            Share your events, schedules, and game lists on your website, social media, or anywhere else. Keep your community informed without them leaving your site.
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-16 relative">
          <div className="w-full max-w-[900px] mx-auto">
            {/* Slide Content */}
            <div className="mb-8">
              <h3 className="text-2xl font-medium text-center text-gray-900 mb-2">
                {embeds[currentSlide].title}
              </h3>
              <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
                {embeds[currentSlide].description}
              </p>
            </div>

            {/* Iframe */}
            <div className="relative">
              <iframe
                key={currentSlide}
                src={embeds[currentSlide].src}
                title={embeds[currentSlide].title}
                width="100%"
                height="540"
                style={{ border: "1px solid #c6c5d0", borderRadius: "8px" }}
              />
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-8 mt-8">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white border-2 border-gray-300 hover:border-gg-blue hover:bg-gg-blue/5 transition-all"
                aria-label="Previous embed"
              >
                <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {embeds.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 w-3 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-gg-blue w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white border-2 border-gray-300 hover:border-gg-blue hover:bg-gg-blue/5 transition-all"
                aria-label="Next embed"
              >
                <ChevronRightIcon className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg">
            All embeds update in real-time and work on any website. Simply copy the embed code and paste it wherever you need it.
          </p>
        </div>
      </Container>
    </section>
  )
}
