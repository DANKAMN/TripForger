"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCityList() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
  <div className="w-full h-full py-16 sm:py-20">
    <h2 className="max-w-7xl px-4 mx-auto text-xl sm:text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
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
          className="flex flex-col md:flex-row items-center gap-6 bg-[#F5F5F7] dark:bg-neutral-800 p-6 sm:p-8 md:p-12 rounded-3xl"
        >
          {/* Text */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-100">
              {city} Highlight #{index + 1}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm sm:text-base md:text-xl leading-relaxed">
              {point}
            </p>
          </div>

          {/* Image */}
          <img
            src={image}
            alt={`${city} highlight`}
            className="flex-1 w-full h-48 sm:h-60 md:h-72 object-cover rounded-2xl shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

const data = [
  {
    category: "Paris, France",
    title: "Iconic Paris: Eiffel Tower, Louvre & River Seine Cruises",
    src: "https://cdn-imgix.headout.com/media/images/9005a46b322b473506d0bd7c1a996207-Combo-First-Image-Template.jpg?auto=compress&fit=min&h=480&w=768",
    content: (
      <DummyContent 
        city="Paris" 
        highlights={[
          "Watch the Eiffel Tower sparkle at night while enjoying fine wine."
        ]} 
        image="https://www.toureiffel.paris/sites/default/files/styles/550x500/public/paragraphe/image_texte/img/illumination550x500.jpg?itok=KV3MCnaU"
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
          "Cross the world’s busiest intersection in electrifying Shibuya."
        ]} 
        image="https://static.wixstatic.com/media/800dff_f3ad467688164f82921c1968fdf309dc~mv2.png/v1/fill/w_740,h_555,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/800dff_f3ad467688164f82921c1968fdf309dc~mv2.png"
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
          "Cruise past Lady Liberty and Ellis Island on a sunny afternoon."
        ]} 
        image="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/35/3a/62.jpg"
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
          "Take in panoramic views from the top of The London Eye."
        ]} 
        image="https://media.istockphoto.com/id/1355459242/photo/beautiful-sunset-view-over-the-city-of-westminster-from-top-of-the-famous-london-eye.jpg?s=612x612&w=0&k=20&c=LPXUwgFXMLo2MZlxqzKWejtJTFed8wToBNvH9if6ZRo="
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
          "Step inside the mighty Colosseum, a wonder of ancient engineering."
        ]} 
        image="https://www.itihasargolpo.com/wp-content/uploads/2025/08/Colosseum-.jpg"
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
          "Watch a world-class performance at the Sydney Opera House."
        ]} 
        image="https://cdn-classikon.b-cdn.net/wp-content/uploads/2022/07/Sydney-Symphony-Orchestra-Concert-Hall-opening-night_Sydney-Opera-House_credit-Daniel-Boud_019.jpg"
      />
    ),
  },
];
