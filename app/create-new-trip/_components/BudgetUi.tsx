import React from 'react'

const SelectBudgetOptions = [
    { id: 1, title: 'Cheap', desc: 'Stay conscious of costs', icon: '💵', color: 'bg-green-100 text-green-600' },
    { id: 2, title: 'Moderate', desc: 'Keep cost on the average side', icon: '💰', color: 'bg-yellow-100 text-yellow-500' },
    { id: 3, title: 'Luxury', desc: "Don't worry about the cost", icon: '💸', color: 'bg-purple-100 text-purple-600' },
]

const BudgetUi = ({ onSelectedOption }: any) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center mt-1">
            {SelectBudgetOptions.map((item, index) => (
                <div
                className="p-3 border rounded-2xl bg-white hover:border-primary cursor-pointer"
                key={index}
                // Change here: Pass only the title string
                onClick={() => onSelectedOption(item.title)}
                >
                    <h2>{item.icon}</h2>
                    <h2>{item.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default BudgetUi;