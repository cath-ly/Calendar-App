import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import getMonth from "../utils/getMonth";
import getCurrentDayClass from "../utils/getCurrentDayClass";

export default function SmallCalendar() {
  const [currentMonthPos, setCurrentMonthPos] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthPos));
  }, [currentMonthPos]);

  //making this handles universal into utils???
  function handlePrevMonth() {
    setCurrentMonthPos(currentMonthPos - 1);
  }

  function handleNextMonth() {
    setCurrentMonthPos(currentMonthPos + 1);
  }

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthPos)).format("MMMM YYYY")}
        </p>
        <div>
          <button onClick={handlePrevMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_right
            </span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                className={`py-1 w-full ${getCurrentDayClass(day)}`}>
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
