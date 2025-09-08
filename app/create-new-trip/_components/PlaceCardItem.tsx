import { Button } from '@/components/ui/button'
import { Clock, ExternalLink, Ticket } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Activity } from './ChatBox'

type Props = {
    activity: Activity
}
const PlaceCardItem = ({ activity }: Props) => {
  return (
    <div>
        <Image src={'/placeholder.jpg'} alt={activity.place_name} width={400} height={200} className='object-cover rounded-xl' />
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