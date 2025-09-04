import { suggestions } from '@/app/_components/Hero'
import React from 'react'

const EmptyBoxState = ({ onSelectOption }: any) => {
  return (
    <div className='mt7'>
        <h2 className='font-bold text-2xl text-center'>
            Forge Your Next <strong className='text-primary'>Adventure</strong> with AI
        </h2>
        <p className='mt-3 text-center text-gray-600'>TripForger helps you design personalized trips step by step, turning your ideas into a tailor-made journey with AI.</p>

        {/* Suggestion list in a column layout, full width */}
        <div className="w-full mt-1">
            <div className="flex flex-col gap-3">
                {suggestions.map((suggestion, index) => (
                <div 
                    key={index}
                    onClick={() => onSelectOption(suggestion.title)}
                    className="flex items-center gap-2 border rounded-xl p-5 cursor-pointer hover:border-primary hover:text-primary w-full"
                >
                    {suggestion.icon}
                    <h2 className="text-lg">{suggestion.title}</h2>
                </div>
                ))}
            </div>
        </div>

        
    </div>
  )
}

export default EmptyBoxState