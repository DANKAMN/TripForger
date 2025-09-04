import React from 'react'
import ChatBox from './_components/ChatBox'

const CreateNewTrip = () => {
  return (
    <div className='grid grid-cols-1 md: grid-cols-2 gap-5 p-10'>
        <div className="">
            <ChatBox />
        </div>
        <div className="">
            Map and trip to display
        </div>
    </div>
  )
}

export default CreateNewTrip