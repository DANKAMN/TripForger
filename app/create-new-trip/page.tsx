"use client";

import React, { useEffect, useState } from 'react'
import ChatBox from './_components/ChatBox'
import Itinerary from './_components/Itinerary'
import { useTripDetail } from '../provider'
import GlobalMap from './_components/GlobalMap';

const CreateNewTrip = () => {
  const { tripDetailInfo, setTripDetailInfo } = useTripDetail()
  const [activeIndex, setActiveIndex] = useState(1)

  useEffect(() => {
    setTripDetailInfo(null)
  }, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-10'>
      <div className="">
          <ChatBox />
      </div>
      <div className="col-span-2">
        { activeIndex === 0 ? <Itinerary /> : <GlobalMap /> }
      </div>
    </div>
  )
}

export default CreateNewTrip