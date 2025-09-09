"use client";

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [myTrips, setMyTrips] = useState([])
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
    </div>
  )
}

export default page