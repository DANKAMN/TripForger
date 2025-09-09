"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Trip } from '../page'
import { ArrowBigRightIcon } from 'lucide-react'
import axios from 'axios'
import Link from 'next/link';

type Props = {
    trip: Trip
}

const MyTripCardItem = ({ trip }: Props) => {
  const [photoUrl, setPhoteUrl] = useState<string>()

  useEffect(() => {
    trip && GetGooglePlaceDetail()

  }, [trip])

  const GetGooglePlaceDetail = async () => {
    const result = await axios.post('/api/google-place-detail', {
      placeName: trip?.tripDetail?.destination
    })

    if (result?.data?.e) {
      return
    }
    
    setPhoteUrl(result?.data)
  }
  
  return (
  <Link href={`/view-trip/${trip?.tripId}`} className="p-4 sm:p-5 shadow rounded-2xl block">
    <div className="relative w-full h-56 sm:h-[270px]">
      <Image 
        src={photoUrl ? photoUrl : '/placeholder.jpg'} 
        alt={trip.tripId} 
        className="rounded-xl object-cover" 
        fill 
        loading="lazy" 
      />
    </div>
    
    <h2 className="flex gap-2 font-semibold text-lg sm:text-xl mt-3">
      {trip?.tripDetail?.origin} <ArrowBigRightIcon /> {trip?.tripDetail?.destination}
    </h2>

    <h2 className="mt-1 sm:mt-2 text-gray-500 text-sm sm:text-base">
      {trip?.tripDetail?.duration} Trip with {trip?.tripDetail?.budget} Budget
    </h2>
  </Link>
)
}

export default MyTripCardItem