import React from 'react'

const SelectBudgetOptions = [
    { id: 1, title: 'Cheap', desc: 'Stay conscious of costs', icon: '💵', color: 'bg-green-100 text-green-600' },
    { id: 2, title: 'Moderate', desc: 'Keep cost on the average side', icon: '💰', color: 'bg-yellow-100 text-yellow-500' },
    { id: 3, title: 'Luxury', desc: "Don't worry about the cost", icon: '💸', color: 'bg-purple-100 text-purple-600' },
]

const BudgetUi = ({ onSelectedOption }: any) => {
    return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
    {SelectBudgetOptions.map((item, index) => (
      <div
        key={index}
        onClick={() => onSelectedOption(item.title)}
        className="p-4 border rounded-2xl bg-white hover:border-primary cursor-pointer flex flex-col items-center text-center transition"
      >
        <h2 className={`text-3xl p-3 rounded-full ${item.color}`}>{item.icon}</h2>
        <h2 className="text-base md:text-lg font-semibold mt-2">{item.title}</h2>
        <p className="text-xs md:text-sm text-gray-500">{item.desc}</p>
      </div>
    ))}
  </div>
)

}

export default BudgetUi;