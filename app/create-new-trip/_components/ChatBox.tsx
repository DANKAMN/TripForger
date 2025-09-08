"use client";

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios';
import { Loader, Send } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import EmptyBoxState from './EmptyBoxState';
import GroupSizeUi from './GroupSizeUi';
import BudgetUi from './BudgetUi';
import FinalUi from './FinalUi';
import SelectDays from './SelectDays';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUserDetail } from '@/app/provider';
import { v4 as uuidv4 } from 'uuid';

type Message = {
  role: string,
  content: string,
  ui?: string
}

export type TripInfo = {
  budget: string,
  destination: string,
  duration: string,
  group_size: string,
  origin: string,
  hotels: Hotel[],
  itinerary: Itinerary[]
}

export type Hotel = {
  hotel_name: string,
  hotel_address: string,
  price_per_night: string,
  hotel_image_url: string,
  geo_coordinates: {
    latitude: number,
    longitude: number
  },
  rating: number
}

export type Activity = {
  place_name: string,
  place_details: string,
  place_image_url: string,
  geo_coordinates: {
    latitude: number,
    longitude: number
  },
  place_address: string,
  ticket_pricing: string,
  time_travel_each_location: string,
  best_time_to_visit: string
}

export type DayPlan = {
  day: number,
  day_plan: string,
  best_time_to_visit_day: string,
  activities: Activity[]
}

export type Itinerary = {
  day: number,
  day_plan: string,
  best_time_to_visit_day: string,
  activities: Activity[]
}

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [userInput, setUserInput] = useState<string>('')
  const [loading, setLoading] = useState(false)

  // This state will hold the value from the Generative UI components
  const [uiSelectedValue, setUiSelectedValue] = useState<string | null>(null);

  const [isFinal, setIsFinal] = useState(false)
  const [tripDetails, setTripDetails] = useState<TripInfo>()

  const SaveTripDetail = useMutation(api.tripDetail.CreateTripDetail)
  const { userDetail, setUserDetail } = useUserDetail()
  // Use a useEffect hook to handle sending the selected UI option
  useEffect(() => {
    if (uiSelectedValue) {
      onSend(uiSelectedValue);
      setUiSelectedValue(null); // Reset the state after sending
    }
  }, [uiSelectedValue]);


  const onSend = async (messageContent = userInput) => {
    if (!messageContent?.trim() && messages.length > 0) return;
    
    setLoading(true);
    setUserInput('');
    
    // Create a new user message
    const newMsg: Message = {
      role: 'user',
      content: messageContent
    };
    
    // Add the new message to the state
    setMessages(prev => [...prev, newMsg]);

    try {
      // Send the entire conversation history to the API
      const result = await axios.post('/api/aimodel', {
        messages: [...messages, newMsg],
        isFinal: isFinal
      });

      // Update messages with the assistant's response
      !isFinal && setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: result?.data?.resp,
          ui: result?.data?.ui
        }
      ]);

      if (isFinal) {
        setTripDetails(result?.data?.trip_plan)

        const tripId = uuidv4()

        await SaveTripDetail({
          tripDetail: result?.data?.trip_plan,
          tripId: tripId,
          uid: userDetail?._id
        })
      }
      console.log(result.data);
    } catch (error) {
      console.error('API call failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleManualInputSend = () => {
    if (userInput.trim() !== '') {
        onSend();
    }
  };

  const handleUiSelection = (value: string) => {
    setUiSelectedValue(value);
  };
  
  const RenderGenerativeUI = (ui: string) => {
    if (ui === 'budget') {
      return <BudgetUi onSelectedOption={handleUiSelection} />;
    } else if (ui === 'groupSize') {
      return <GroupSizeUi onSelectedOption={handleUiSelection} />;
    } else if (ui === 'tripDuration') {
      return <SelectDays onSelectedOption={handleUiSelection}/>
    } else if (ui === 'final') {
      return <FinalUi viewTrip={() => console.log()} disable={!tripDetails}  />
    }
    return null;
  };

  useEffect(() => {
    const lastMsg = messages[messages.length - 1];

    if (lastMsg ?.ui === 'final') {
      setIsFinal(true);
      setUserInput('Ok, Great!')
      // onSend()
    }
  }, [messages]) 

  useEffect(() => {
    if (isFinal && userInput) {
      onSend()
    }
  }, [isFinal])

  return (
    <div className="h-[85vh] flex flex-col">
        {
            messages?.length === 0 && <EmptyBoxState onSelectOption={handleUiSelection} />
        }

        {/* Display Messages */}
        <section className='flex-1 overflow-y-auto p-4'>
            {messages.map((msg: Message, index) => (
                msg.role === 'user' ? (
                    <div className="flex justify-end mt-2" key={index}>
                        <div className="max-w-lg bg-primary text-white px-4 py-2 rounded-lg">
                            {msg.content}
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-start mt-2" key={index}>
                        <div className="max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg">
                            {msg.content}
                            {RenderGenerativeUI(msg.ui ?? '')}
                        </div>
                    </div>
                )
            ))}
            
            { 
                loading && 
                <div className="flex justify-start mt-2">
                    <div className="max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg">
                        <Loader className='animate-spin' />
                    </div>
                </div>
            }
        </section>

        {/* User Input */}
        <section>
            <div className="border rounded-2xl p-4 shadow relative">
                <Textarea
                placeholder="Start typing here..."
                className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
                onChange={(event) => setUserInput(event.target.value)}
                value={userInput}
                />
                <Button
                size="icon"
                className="absolute bottom-6 right-6" onClick={handleManualInputSend}
                >
                <Send className="h-4 w-4" />
                </Button>
            </div>
        </section>
    </div>
  );
};

export default ChatBox;