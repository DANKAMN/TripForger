"use client";

import React, { useEffect, useState } from 'react'
import { Timeline } from "@/components/ui/timeline";
import HotelCardItem from './HotelCardItem';
import PlaceCardItem from './PlaceCardItem';
import { useTripDetail } from '@/app/provider';
import { TripInfo } from './ChatBox';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

const Itinerary = () => {
  const { tripDetailInfo, setTripDetailInfo} = useTripDetail()

  const [tripData, setTripData] = useState<TripInfo|null>(null)

  useEffect(() => {
    tripDetailInfo && setTripData(tripDetailInfo)
  }, [tripDetailInfo])

   const data = tripData ? [
    {
      title: "Recommended Hotels",
      content: (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {tripData?.hotels.map((hotel) => (
            <HotelCardItem hotel={hotel} key={hotel.hotel_name} />
          ))}
        </div>
      ),
    },
    ...tripData?.itinerary.map((dayData) => ({
      title: `Day ${dayData?.day}`,
      content: (
        <div className="">
          <p className='text-primary text-3xl'>Best Time: {dayData?.best_time_to_visit_day}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dayData?.activities.map((activity) => (
              <PlaceCardItem activity={activity} key={activity.place_name} />
            ))}
          </div>
        </div>
      )
    }))
  ] : [];
  return (
    <div className="relative w-full h-[85vh] overflow-auto">
      {
        tripData ? <Timeline data={data} tripData={tripData} /> : <div className="">
          <h2 className='fflex gap-2 items-center absolute left-5 top-10 md:left-20 md:top-20 
  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug'><ArrowLeft /> Tell us a bit about your preferences so we can craft the perfect trip for you...</h2>
          <Image src={'/travel.png'} alt='travel' width={800} height={800} className='w-full h-full object-cover rounded-3xl' />
        </div>
      }
    </div>
  );
}

export default Itinerary