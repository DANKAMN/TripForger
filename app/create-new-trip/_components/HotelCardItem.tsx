"use client";

import { Button } from '@/components/ui/button'
import { ExternalLink, Star, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Hotel } from './ChatBox'
import axios from 'axios'

type Props = {
    hotel: Hotel
}

const HotelCardItem = ({ hotel }: Props) => {
  const [photeUrl, setPhoteUrl] = useState<string>()

  useEffect(() => {
    hotel && GetGooglePlaceDetail()

  }, [hotel])

  const GetGooglePlaceDetail = async () => {
    const result = await axios.post('/api/google-place-detail', {
      placeName: hotel?.hotel_name
    })

    if (result?.data?.e) {
      return
    }
    
    setPhoteUrl(result?.data)
  }

  return (
    <div className="flex flex-col gap-1">
        <Image className='rounded-xl shadow object-cover mb-2' src={photeUrl ? photeUrl : '/placeholder.jpg'} alt='hotel name' width={400} height={200} loading="lazy" />
        <h2 className='font-semibold text-lg'>{hotel?.hotel_name}</h2>
        <h2 className='text-gray-500'>{hotel?.hotel_address}</h2>
        <div className="flex justify-between items-center">
        <p className='flex gap-2 text-green-600'> <Wallet /> {hotel?.price_per_night}</p>
        <p className='text-yellow-500 flex gap-2'><Star /> {hotel?.rating}</p>
        </div>
        <Link href={`https://www.google.com/maps/search/?api=1&query='+${hotel?.hotel_name}`} target='_blank'
        >
            <Button size={'sm'} variant={'outline'} className='w-full mt-1'>
            View <ExternalLink />
            </Button>
        </Link>
        {/* <p className='line-clamp-2 text-gray-500'>{hotel?.description}</p> */}
    </div>
  )
}

export default HotelCardItem