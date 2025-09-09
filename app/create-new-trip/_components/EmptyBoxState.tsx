import { suggestions } from '@/app/_components/Hero'
import React from 'react'

const EmptyBoxState = ({ onSelectOption }: any) => {
  return (
  <div className="mt-7 px-4">
    <h2 className="font-bold text-xl md:text-2xl text-center">
      Forge Your Next <strong className="text-primary">Adventure</strong> with AI
    </h2>
    <p className="mt-3 text-center text-gray-600 text-sm md:text-base">
      TripForger helps you design personalized trips step by step, turning your ideas into a tailor-made journey with AI.
    </p>

    <div className="w-full mt-4">
      <div className="flex flex-col gap-3">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            onClick={() => onSelectOption(suggestion.title)}
            className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer hover:border-primary hover:text-primary w-full transition"
          >
            <span className="text-lg">{suggestion.icon}</span>
            <h2 className="text-sm md:text-base font-medium">{suggestion.title}</h2>
          </div>
        ))}
      </div>
    </div>
  </div>
)
}

export default EmptyBoxState