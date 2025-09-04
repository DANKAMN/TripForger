import React from "react";

const SelectTravelersList = [
    { id: 1, title: 'Just Me', desc: 'A sole travelers in exploration', icon: '✈️', people: '1' },
    { id: 2, title: 'Couple', desc: 'Two travelers in tandem', icon: '🥂', people: '2' },
    { id: 3, title: 'A Family', desc: 'A group of fun loving adventurers', icon: '🏠', people: '3 to 5 People' },
    { id: 4, title: 'Friends', desc: 'A bunch of thrill-seekers', icon: '🛥️', people: '5 to 10 People' },
]

function GroupSizeUi({ onSelectedOption }: any) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center mt-1">
            {SelectTravelersList.map((item, index) => (
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

export default GroupSizeUi;