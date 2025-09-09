"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Trip } from '../page'
import { ArrowBigRightIcon } from 'lucide-react'
import axios from 'axios'

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
    <div className="p-5 shadow rounded-2xl">
        <div className="relative w-full h-[270px]">
            <Image src={photoUrl ? photoUrl : '/placeholder.jpg'} alt={trip.tripId} className='rounded-xl object-cover' fill loading='lazy' />
        </div>
        
        <h2 className='flex gap-2 font-semibold text-xl mt-2'>{trip?.tripDetail?.origin} <ArrowBigRightIcon /> {trip?.tripDetail?.destination}</h2>

        <h2 className='mt-2 text-gray-500'>{trip?.tripDetail?.duration} Trip with {trip?.tripDetail?.budget} Budget</h2>
    </div>
  )
}

export default MyTripCardItem