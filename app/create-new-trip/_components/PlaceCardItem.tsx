"use client";

import { Button } from '@/components/ui/button'
import { Clock, ExternalLink, Ticket } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Activity } from './ChatBox'
import axios from 'axios'

type Props = {
  activity: Activity
}

const PlaceCardItem = ({ activity }: Props) => {
  const [photeUrl, setPhoteUrl] = useState<string>()

  useEffect(() => {
    activity && GetGooglePlaceDetail()

  }, [activity])

  const GetGooglePlaceDetail = async () => {
    const result = await axios.post('/api/google-place-detail', {
      placeName: activity?.place_name + ":" + activity?.place_address
    })

    if (result?.data?.e) {
      return
    }
    
    setPhoteUrl(result?.data)
  }

  return (
    <div>
        <Image src={photeUrl ? photeUrl : '/placeholder.jpg'} alt='activity name' width={400} height={200} className='object-cover rounded-xl' loading="lazy" />
        <h2 className='font-semibold text-lg'>{activity?.place_name}</h2>
        <p className='text-gray-500 line-clamp-2'>{activity?.place_details}</p>
        <h2 className='flex gap-2 text-blue-500 line-clamp-1'> <Ticket />{activity?.ticket_pricing}</h2>
        <p className='flex text-orange-400 line-clamp-1'> <Clock /> {activity?.best_time_to_visit}</p>
        <Link href={`https://www.google.com/maps/search/?api=1&query='+${activity?.place_name}`} target='_blank'
        >
            <Button size={'sm'} variant={'outline'} className='w-full mt-2'>
            View <ExternalLink />
            </Button>
        </Link>
        
        </div>
  )
}

export default PlaceCardItem