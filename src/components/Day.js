import React from 'react'
import { getCurrentDayClass } from '../utils/getCurrentDayClass'

//day format will bring the two digits of day DD
//ddd format will giver the day in letters for ex. MON, want to display only the first time of the month to reduce UI clutter
export default function Day({day, rowIdx}) {
  return (
    <div className = "border border-gray-200 flex flex-col">
      <header className = "flex flex-col items-center">
        {rowIdx === 0 && (
            <p className="text-sm mt-1">
                {day.format('ddd').toUpperCase()}
            </p>
        )}
        <p className = {`text-sm p-1 my-1 text-center ${getCurrentDayClass(day)}`}>
            {day.format('DD')}
        </p>
      </header>
    </div>
  )
}
