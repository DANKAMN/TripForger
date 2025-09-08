import React from 'react'
import { Timeline } from "@/components/ui/timeline";
import Image from 'next/image';
import { Clock, ExternalLink, Star, Ticket, Timer, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import HotelCardItem from './HotelCardItem';
import PlaceCardItem from './PlaceCardItem';

const TRIP_DATA= {
  budget: "Luxury",
  destination: "Kampala, Uganda",
  duration: "15 days",
  group_size: "Couple",
  hotels: [
    {
      description:
        "A luxurious resort located by the shores of Lake Victoria, offering world-class amenities and beautiful views.",
      geo_coordinates: {
        latitude: 0.3022,
        longitude: 32.5694,
      },
      hotel_address: "Munyonyo, Kampala, Uganda",
      hotel_image_url: "https://example.com/hotel1.jpg",
      hotel_name: "Speke Resort Munyonyo",
      price_per_night: "$200",
      rating: 4.8,
    },
    {
      description:
        "This elegant hotel features stunning architecture, green gardens, and offers multiple dining options.",
      geo_coordinates: {
        latitude: 0.3476,
        longitude: 32.5825,
      },
      hotel_address: "Kintu Road, Kampala, Uganda",
      hotel_image_url: "https://example.com/hotel2.jpg",
      hotel_name: "Kampala Serena Hotel",
      price_per_night: "$250",
      rating: 4.6,
    },
    {
      description:
        "A comfortable and upscale hotel known for its friendly staff and great dining experiences.",
      geo_coordinates: {
        latitude: 0.3574,
        longitude: 32.5756,
      },
      hotel_address: "1 Kuiranja Road, Kampala, Uganda",
      hotel_image_url: "https://example.com/hotel3.jpg",
      hotel_name: "Fairway Hotel",
      price_per_night: "$180",
      rating: 4.4,
    },
  ],
  itinerary: [
    {
      activities: [
        {
          best_time_to_visit: "Morning",
          geo_coordinates: {
            latitude: 0.0423,
            longitude: 32.4409,
          },
          place_address: "Entebbe, Uganda",
          place_details:
            "The main airport serving the Kampala area.",
          place_image_url:
            "https://example.com/airport.jpg",
          place_name: "Entebbe International Airport",
          ticket_pricing: "N/A",
          time_travel_each_location: "1 hour",
        },
      ],
      best_time_to_visit_day: "Morning",
      day: 1,
      day_plan: "Arrival in Kampala",
    },
    {
      activities: [
        {
          best_time_to_visit: "Afternoon",
          geo_coordinates: {
            latitude: 0.3395,
            longitude: 32.5773,
          },
          place_address:
            "Plot 5-7 Kira Road, Kampala, Uganda",
          place_details:
            "The oldest museum in East Africa, showcasing Uganda's history and culture.",
          place_image_url: "https://example.com/museum.jpg",
          place_name: "Uganda Museum",
          ticket_pricing: "$5",
          time_travel_each_location: "30 mins from hotel",
        },
      ],
      best_time_to_visit_day: "Afternoon",
      day: 2,
      day_plan: "Visit the Uganda Museum",
    },
    {
      activities: [
        {
          best_time_to_visit: "Morning",
          geo_coordinates: {
            latitude: 0.3773,
            longitude: 32.5782,
          },
          place_address: "Kasubi Hill, Kampala, Uganda",
          place_details:
            "A UNESCO World Heritage site and burial place for the kings of Buganda.",
          place_image_url: "https://example.com/tombs.jpg",
          place_name: "Kasubi Tombs",
          ticket_pricing: "$10",
          time_travel_each_location: "20 mins from hotel",
        },
      ],
      best_time_to_visit_day: "Morning",
      day: 3,
      day_plan: "Explore Kasubi Tombs",
    },
    {
      activities: [
        {
          best_time_to_visit: "Evening",
          geo_coordinates: {
            latitude: 0.344,
            longitude: 32.5862,
          },
          place_address:
            "Plot 7/9, Victoria Avenue, Kampala, Uganda",
          place_details:
            "A center for performing arts in Uganda, hosting various cultural performances.",
          place_image_url:
            "https://example.com/theater.jpg",
          place_name: "National Theater",
          ticket_pricing: "$15",
          time_travel_each_location: "15 mins from hotel",
        },
      ],
      best_time_to_visit_day: "Evening",
      day: 4,
      day_plan: "Visit the National Theater",
    },
    {
      activities: [
        {
          best_time_to_visit: "Afternoon",
          geo_coordinates: {
            latitude: -0.2435,
            longitude: 33.1042,
          },
          place_address: "Kampala, Uganda",
          place_details:
            "The largest lake in Africa, offering beautiful views and recreational activities.",
          place_image_url: "https://example.com/lake.jpg",
          place_name: "Lake Victoria",
          ticket_pricing: "N/A",
          time_travel_each_location: "40 mins from hotel",
        },
      ],
      best_time_to_visit_day: "Afternoon",
      day: 5,
      day_plan: "Relax at Lake Victoria",
    },
    {
      activities: [
        {
          best_time_to_visit: "Evening",
          geo_coordinates: {
            latitude: 0.3574,
            longitude: 32.6056,
          },
          place_address:
            "50 meters off Bunyoni Road, Kampala, Uganda",
          place_details:
            "A cultural center showcasing traditional Ugandan music and dance performances.",
          place_image_url: "https://example.com/ndere.jpg",
          place_name: "Ndere Cultural Center",
          ticket_pricing: "$30",
          time_travel_each_location: "30 mins from hotel",
        },
      ],
      best_time_to_visit_day: "Evening",
      day: 6,
      day_plan: "Visit Ndere Cultural Center",
    },
    {
      activities: [
        {
          best_time_to_visit: "Morning",
          geo_coordinates: {
            latitude: 0.3475,
            longitude: 32.5823,
          },
          place_address: "Buganda Road, Kampala, Uganda",
          place_details:
            "A bustling street in Kampala known for its shops and vendors.",
          place_image_url:
            "https://example.com/buganda.jpg",
          place_name: "Buganda Road",
          ticket_pricing: "N/A",
          time_travel_each_location: "10 mins from hotel",
        },
      ],
      best_time_to_visit_day: "Morning",
      day: 7,
      day_plan: "Explore Buganda Road",
    },
    {
      activities: [
        {
          best_time_to_visit: "Morning",
          geo_coordinates: {
            latitude: 0.3347,
            longitude: 32.5779,
          },
          place_address:
            "Old Kampala Hill, Kampala, Uganda",
          place_details:
            "A grand mosque in Kampala, known for its stunning architecture and views.",
          place_image_url: "https://example.com/mosque.jpg",
          place_name: "Gaddafi National Mosque",
          ticket_pricing: "Free",
          time_travel_each_location: "15 mins from hotel",
        },
      ],
      best_time_to_visit_day: "Morning",
      day: 8,
      day_plan: "Visit the Gaddafi National Mosque",
    },
    {
      activities: [
        {
          best_time_to_visit: "Afternoon",
          geo_coordinates: {
            latitude: 0.3479,
            longitude: 32.5963,
          },
          place_address: "Kampala, Uganda",
          place_details:
            "A vibrant market filled with local crafts and handmade goods.",
          place_image_url:
            "https://example.com/craftmarket.jpg",
          place_name: "Craft Market",
          ticket_pricing: "N/A",
          time_travel_each_location: "20 mins from hotel",
        },
      ],
      best_time_to_visit_day: "Afternoon",
      day: 9,
      day_plan: "Visit the Craft Market",
    },
    {
      activities: [
        {
          best_time_to_visit: "All Day",
          geo_coordinates: {
            latitude: 2.3431,
            longitude: 31.3727,
          },
          place_address: "Murchison Falls, Uganda",
          place_details:
            "Famous for its wildlife and stunning waterfalls.",
          place_image_url:
            "https://example.com/murchison.jpg",
          place_name: "Murchison Falls National Park",
          ticket_pricing: "$40",
          time_travel_each_location: "3 hours from hotel",
        },
      ],
      best_time_to_visit_day: "All Day",
      day: 10,
      day_plan: "Wildlife Day Trip to Murchison Falls",
    },
    {
      activities: [
        {
          best_time_to_visit: "Morning",
          geo_coordinates: {
            latitude: 0.3402,
            longitude: 32.5778,
          },
          place_address: "Entebbe, Uganda",
          place_details:
            "A beautiful garden showcasing Uganda's flora.",
          place_image_url:
            "https://example.com/gardens.jpg",
          place_name: "Botanical Gardens",
          ticket_pricing: "$5",
          time_travel_each_location: "1 hour from hotel",
        },
      ],
      best_time_to_visit_day: "Morning",
      day: 11,
      day_plan: "Visit the Botanical Gardens",
    },
    {
      activities: [
        {
          best_time_to_visit: "Afternoon",
          geo_coordinates: {
            latitude: 0.4013,
            longitude: 32.6523,
          },
          place_address: "Namugongo, Uganda",
          place_details:
            "A cultural and religious site dedicated to the martyrs of Uganda.",
          place_image_url: "https://example.com/shrine.jpg",
          place_name: "Uganda Martyrs Shrine",
          ticket_pricing: "Free",
          time_travel_each_location: "30 mins from hotel",
        },
      ],
      best_time_to_visit_day: "Afternoon",
      day: 12,
      day_plan: "Learn at the Uganda Martyrs Shrine",
    },
    {
      activities: [
        {
          best_time_to_visit: "Evening",
          geo_coordinates: {
            latitude: 0.3593,
            longitude: 32.5979,
          },
          place_address: "Kololo, Kampala, Uganda",
          place_details:
            "An upscale neighborhood with stunning views of Kampala.",
          place_image_url: "https://example.com/kololo.jpg",
          place_name: "Kololo Ridge",
          ticket_pricing: "N/A",
          time_travel_each_location: "10 mins from hotel",
        },
      ],
      best_time_to_visit_day: "Evening",
      day: 13,
      day_plan: "Visit the Kololo Ridge",
    },
    {
      activities: [
        {
          best_time_to_visit: "Morning",
          geo_coordinates: {
            latitude: 0.3486,
            longitude: 32.6013,
          },
          place_address: "Kampala, Uganda",
          place_details:
            "Get hands-on experience in Ugandan cuisine with a local chef.",
          place_image_url:
            "https://example.com/cookingclass.jpg",
          place_name: "Local Cooking Class",
          ticket_pricing: "$50",
          time_travel_each_location: "20 mins from hotel",
        },
      ],
      best_time_to_visit_day: "Morning",
      day: 14,
      day_plan: "Cultural Cooking Class",
    },
    {
      activities: [
        {
          best_time_to_visit: "Afternoon",
          geo_coordinates: {
            latitude: 0.0423,
            longitude: 32.4409,
          },
          place_address: "Entebbe, Uganda",
          place_details:
            "Departure from Uganda back to Lagos.",
          place_image_url:
            "https://example.com/airport.jpg",
          place_name: "Entebbe International Airport",
          ticket_pricing: "N/A",
          time_travel_each_location: "1 hour",
        },
      ],
      best_time_to_visit_day: "Afternoon",
      day: 15,
      day_plan: "Departure from Kampala",
    },
  ],
  origin: "Lagos, Nigeria",
}

const Itinerary = () => {
   const data = [
    {
      title: "Recommended Hotels",
      content: (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {TRIP_DATA.hotels.map((hotel) => (
            <HotelCardItem hotel={hotel} />
          ))}
        </div>
      ),
    },
    ...TRIP_DATA.itinerary.map((dayData) => ({
      title: `Day ${dayData?.day}`,
      content: (
        <div className="">
          <p className=''>Best Time: {dayData?.best_time_to_visit_day}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dayData?.activities.map((activity, index) => (
              <PlaceCardItem activity={activity} />
            ))}
          </div>
        </div>
      )
    }))
  ];
  return (
    <div className="relative w-full  h-[85vh] overflow-auto">
      <Timeline data={data} tripData={TRIP_DATA} />
    </div>
  );
}

export default Itinerary