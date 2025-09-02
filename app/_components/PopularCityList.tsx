"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCityList() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 ">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Popular Destinations to Visit
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ city, highlights, image }: { 
  city: string; 
  highlights: string[]; 
  image: string; 
}) => {
  return (
    <div className="space-y-6">
      {highlights.map((point, index) => (
        <div
          key={`${city}-highlight-${index}`}
          className={`flex flex-col md:flex-row items-center gap-6 bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-12 rounded-3xl`}
        >
          {/* Text */}
          <div className="flex-1">
            <h3 className="text-lg md:text-2xl font-bold text-neutral-800 dark:text-neutral-100">
              {city} Highlight #{index + 1}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-base md:text-xl leading-relaxed">
              {point}
            </p>
          </div>

          {/* Image */}
          <img
            src={image}
            alt={`${city} highlight`}
            className="flex-1 w-full h-60 md:h-72 object-cover rounded-2xl shadow-md"
          />
        </div>
      ))}
    </div>
  );
};


// const data = [
//   {
//     category: "Paris, France",
//     title: "Iconic Paris: Eiffel Tower, Louvre & River Seine Cruises",
//     src: "https://cdn-imgix.headout.com/media/images/9005a46b322b473506d0bd7c1a996207-Combo-First-Image-Template.jpg?auto=compress&fit=min&h=480&w=768",
//     content: <DummyContent />,
//   },
//   {
//     category: "Tokyo, Japan",
//     title: "Explore Tokyo: Shibuya Crossing, Senso-ji & Tokyo Skytree",
//     src: "https://www.gotokyo.org/en/see-and-do/attractions/images/9_0102_2.jpg",
//     content: <DummyContent />,
//   },
//   {
//     category: "New York City, USA",
//     title: "Discover NYC: Statue of Liberty, Central Park & Empire State Building",
//     src: "https://4kwallpapers.com/images/wallpapers/new-york-city-skyline-panorama-sunset-skyscrapers-3840x2160-4645.jpg",
//     content: <DummyContent />,
//   },
//   {
//     category: "London, United Kingdom",
//     title: "Classic London: Tower Bridge, Big Ben & The London Eye",
//     src: "https://media.cntraveller.com/photos/63f37018ea053d878b345cb2/4%3A3/w_3456%2Ch_2592%2Cc_limit/London-GettyImages-585295947.jpeg",
//     content: <DummyContent />,
//   },
//   {
//     category: "Rome, Italy",
//     title: "Historic Rome: Colosseum, Vatican & Trevi Fountain",
//     src: "https://theromanguy.com/wp-content/uploads/Colosseum-Restoration.jpeg",
//     content: <DummyContent />,
//   },
//   {
//     category: "Sydney, Australia",
//     title: "Vibrant Sydney: Opera House, Harbour Bridge & Bondi Beach",
//     src: "https://www.curiousgoosetravel.com/wp-content/uploads/2023/07/6262bd_c26714b4525c439db96c8c876676f5e3mv2.jpg",
//     content: <DummyContent />,
//   },
// ];

const data = [
  {
    category: "Paris, France",
    title: "Iconic Paris: Eiffel Tower, Louvre & River Seine Cruises",
    src: "https://cdn-imgix.headout.com/media/images/9005a46b322b473506d0bd7c1a996207-Combo-First-Image-Template.jpg?auto=compress&fit=min&h=480&w=768",
    content: (
      <DummyContent 
        city="Paris" 
        highlights={[
          "Watch the Eiffel Tower sparkle at night while enjoying fine wine.",
          "Glide along the Seine on a moonlit boat cruise past Notre-Dame.",
          "Lose yourself in Louvre’s masterpieces, from da Vinci to Delacroix."
        ]} 
        image="https://images.unsplash.com/photo-1522098543979-ffc7f79d7f62?auto=format&fit=crop&w=1200&q=80"
      />
    ),
  },
  {
    category: "Tokyo, Japan",
    title: "Explore Tokyo: Shibuya Crossing, Senso-ji & Tokyo Skytree",
    src: "https://www.gotokyo.org/en/see-and-do/attractions/images/9_0102_2.jpg",
    content: (
      <DummyContent 
        city="Tokyo" 
        highlights={[
          "Cross the world’s busiest intersection in electrifying Shibuya.",
          "Find serenity at Senso-ji, Tokyo’s oldest Buddhist temple.",
          "See Tokyo from above at Skytree, Japan’s tallest tower."
        ]} 
        image="https://images.unsplash.com/photo-1505063892761-4acb3c2a1e3a?auto=format&fit=crop&w=1200&q=80"
      />
    ),
  },
  {
    category: "New York City, USA",
    title: "Discover NYC: Statue of Liberty, Central Park & Empire State Building",
    src: "https://4kwallpapers.com/images/wallpapers/new-york-city-skyline-panorama-sunset-skyscrapers-3840x2160-4645.jpg",
    content: (
      <DummyContent 
        city="New York City" 
        highlights={[
          "Cruise past Lady Liberty and Ellis Island on a sunny afternoon.",
          "Stroll through Central Park in autumn’s golden glow.",
          "Climb the Empire State Building for a skyline you’ll never forget."
        ]} 
        image="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80"
      />
    ),
  },
  {
    category: "London, United Kingdom",
    title: "Classic London: Tower Bridge, Big Ben & The London Eye",
    src: "https://media.cntraveller.com/photos/63f37018ea053d878b345cb2/4%3A3/w_3456%2Ch_2592%2Cc_limit/London-GettyImages-585295947.jpeg",
    content: (
      <DummyContent 
        city="London" 
        highlights={[
          "Take in panoramic views from the top of The London Eye.",
          "Walk across the iconic Tower Bridge at sunset.",
          "Hear Big Ben chime in the heart of Westminster."
        ]} 
        image="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1200&q=80"
      />
    ),
  },
  {
    category: "Rome, Italy",
    title: "Historic Rome: Colosseum, Vatican & Trevi Fountain",
    src: "https://theromanguy.com/wp-content/uploads/Colosseum-Restoration.jpeg",
    content: (
      <DummyContent 
        city="Rome" 
        highlights={[
          "Step inside the mighty Colosseum, a wonder of ancient engineering.",
          "Marvel at Michelangelo’s Sistine Chapel inside the Vatican.",
          "Toss a coin into Trevi Fountain to ensure your return to Rome."
        ]} 
        image="https://images.unsplash.com/photo-1549640360-6093f2cdb45c?auto=format&fit=crop&w=1200&q=80"
      />
    ),
  },
  {
    category: "Sydney, Australia",
    title: "Vibrant Sydney: Opera House, Harbour Bridge & Bondi Beach",
    src: "https://www.curiousgoosetravel.com/wp-content/uploads/2023/07/6262bd_c26714b4525c439db96c8c876676f5e3mv2.jpg",
    content: (
      <DummyContent 
        city="Sydney" 
        highlights={[
          "Watch a world-class performance at the Sydney Opera House.",
          "Climb the Harbour Bridge for sweeping coastal views.",
          "Relax on Bondi Beach, a paradise for surfers and sunseekers."
        ]} 
        image="https://images.unsplash.com/photo-1510749676361-1d6b44d34f87?auto=format&fit=crop&w=1200&q=80"
      />
    ),
  },
];
