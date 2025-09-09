// SelectDays.tsx
import React from "react";

const SelectDaysOptions = [
  { id: 1, title: "Weekend Trip", desc: "2 - 3 days", value: "3 days", icon: "🗓️" },
  { id: 2, title: "Short Vacation", desc: "4 - 6 days", value: "5 days", icon: "📆" },
  { id: 3, title: "One Week", desc: "7 days", value: "7 days", icon: "🛫" },
  { id: 4, title: "Extended Trip", desc: "10 - 14 days", value: "12 days", icon: "🌍" },
  { id: 5, title: "Long Holiday", desc: "15+ days", value: "15 days", icon: "🏝️" },
];

function SelectDays({ onSelectedOption }: { onSelectedOption: (value: string) => void }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
      {SelectDaysOptions.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelectedOption(item.value)}
          className="p-4 border rounded-2xl bg-white hover:border-primary cursor-pointer flex flex-col items-center text-center transition"
        >
          <h2 className="text-2xl md:text-3xl">{item.icon}</h2>
          <h2 className="text-sm md:text-base font-semibold mt-1">{item.title}</h2>
          <p className="text-xs md:text-sm text-gray-500">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default SelectDays;
