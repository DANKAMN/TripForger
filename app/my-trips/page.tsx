"use client";

import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api';
import { useConvex } from 'convex/react';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useUserDetail } from '../provider';
import { TripInfo } from '../create-new-trip/_components/ChatBox';
import Image from 'next/image';

type Trip = {
    tripId: any,
    tripDetail: TripInfo,
    _id: string
}

const page = () => {
  const [myTrips, setMyTrips] = useState<Trip[]>([])
  const { userDetail, setUserDetail } = useUserDetail()

  const convex = useConvex();

  useEffect(() => {
    userDetail && GetUserTrip()
  }, [userDetail])

  const GetUserTrip = async () => {
    const result = await convex.query(api.tripDetail.GetUserTrips, {
        uid: userDetail?._id
    })

    setMyTrips(result)
    console.log(result)
  }
  return (
    <div className='px-10 p-10 md:px-24 lg:px-48'>
        <h2 className='font-bold text-3xl'>My Trips</h2>

        {myTrips.length === 0 && (
            <div className="p-7 border rounded-2xl flex flex-col items-center justify-center gap-5 mt-6">
                <h2>Looks like your travel list is empty. Time to add a trip!</h2>
                <Link href={'/create-new-trip'}>
                    <Button>create your first trip today!</Button>
                </Link>
            </div>
        )}

        <div className="">
            {myTrips.map((trip, index) => (
                <div className="" key={index}>
                    <Image src={'/placeholder.jpg'} alt={trip.tripId} width={400} height={400} className='rounded-xl object-cover' />
                    <h2 className='flex gap-2 font-semibold text-xl'>Trip to {trip?.tripDetail?.destination}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default page