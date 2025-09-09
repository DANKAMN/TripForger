"use client";

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ArrowDown, Globe2, Landmark, Plane, Send } from 'lucide-react'
import React, { use } from 'react'
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export const suggestions = [
  {
    title: 'Plan a New Journey',
    icon: <Globe2 className='text-blue-400 h-7 w-7' />
  },
  {
    title: 'Surprise Me with Ideas',
    icon: <Plane className='text-green-500 h-7 w-7' />
  },
  {
    title: 'Uncover Hidden Treasures',
    icon: <Landmark className='text-orange-500 h-7 w-7' />
  },
  {
    title: 'Seek Thrilling Adventures',
    icon: <Globe2 className='text-yellow-600 h-7 w-7' />
  }
]

const Hero = () => {
  const { user } = useUser();
  const router = useRouter();

  const onSend = () => {
    // If user isn't signed in navigate to sign in page
    if (!user) {
      router.push('/sign-in')
      return;
    }

    // Navigate to trip planner page
    router.push('/create-new-trip')
  }

  return ( 
    <div className="mt-24 w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          Hey, I'm your personal <span className="text-primary">TripForger</span>
        </h1>

        <p className="text-base sm:text-lg">Plan smarter, travel better — forged for you.</p>

        {/* Input Box */}
        <div>
          <div className="border rounded-2xl p-4 shadow relative">
            <Textarea 
              placeholder="Create a trip for Paris from New York" 
              className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
            />
            <Button 
              size="icon" 
              className="absolute bottom-6 right-6" 
              onClick={() => onSend()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Auto-scrolling suggestion list */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-4">
            {[...suggestions, ...suggestions].map((suggestion, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 border rounded-full px-4 py-2 cursor-pointer hover:bg-primary hover:text-white whitespace-nowrap flex-shrink-0 text-sm sm:text-base"
              >
                {suggestion.icon}
                <h2>{suggestion.title}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-10">
            What Travelers Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <p className="text-gray-600 italic">
                "TripForger made planning my trip effortless. I had a full itinerary in minutes!"
              </p>
              <h3 className="mt-4 font-semibold">— Sarah L.</h3>
            </div>

            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <p className="text-gray-600 italic">
                "I discovered hidden gems I’d never have found on my own. Amazing experience!"
              </p>
              <h3 className="mt-4 font-semibold">— Daniel K.</h3>
            </div>

            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <p className="text-gray-600 italic">
                "The AI suggestions were spot on. Saved me hours of research."
              </p>
              <h3 className="mt-4 font-semibold">— Maria R.</h3>
            </div>

            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <p className="text-gray-600 italic">
                "Best travel planning tool I’ve ever used — can’t wait to use it again!"
              </p>
              <h3 className="mt-4 font-semibold">— James P.</h3>
            </div>
          </div>
        </div>
      </div>        
    </div>
  )

}

export default Hero
