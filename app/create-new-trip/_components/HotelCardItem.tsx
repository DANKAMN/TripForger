import { Button } from '@/components/ui/button'
import { ExternalLink, Star, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Hotel } from './ChatBox'

type Props = {
    hotel: Hotel
}

const HotelCardItem = ({ hotel }: Props) => {
  return (
    <div className="flex flex-col gap-1">
        <Image className='rounded-xl shadow object-cover mb-2' src={'/placeholder.jpg'} alt={hotel.hotel_name} width={400} height={200} />
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