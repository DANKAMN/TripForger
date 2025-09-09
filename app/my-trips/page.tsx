"use client";

import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api';
import { useConvex } from 'convex/react';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useUserDetail } from '../provider';
import { TripInfo } from '../create-new-trip/_components/ChatBox';
import Image from 'next/image';
import MyTripCardItem from './_components/MyTripCardItem';

export type Trip = {
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
  <div className="px-4 sm:px-10 lg:px-24 py-10">
    <h2 className="font-bold text-2xl sm:text-3xl">My Trips</h2>

    {myTrips.length === 0 && (
      <div className="p-6 sm:p-7 border rounded-2xl flex flex-col items-center justify-center gap-5 mt-6 text-center">
        <h2 className="text-base sm:text-lg">Looks like your travel list is empty. Time to add a trip!</h2>
        <Link href={'/create-new-trip'}>
          <Button>Create your first trip today!</Button>
        </Link>
      </div>
    )}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
      {myTrips.map((trip, index) => (
        <MyTripCardItem trip={trip} key={index} />
      ))}
    </div>
  </div>
)
}

export default page