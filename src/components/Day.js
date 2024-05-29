import React, { useContext, useEffect, useState } from "react";
import getCurrentDayClass from "../utils/getCurrentDayClass";
import GlobalContext from "../contexts/GlobalContext";
import dayjs from "dayjs";

//day format will bring the two digits of day DD
//ddd format will giver the day in letters for ex. MON, want to display only the first time of the month to reduce UI clutter
export default function Day({ day, rowIdx }) {
  const [eventDay, setEventDay] = useState([]);
  const { setSelectedDay, setShowEventModel, markedEvents } =
    useContext(GlobalContext);

  useEffect(() => {
    const events = markedEvents.filter(
      (event) => dayjs(event.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setEventDay(events);
  }, [markedEvents, day]);
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p
          className={`text-sm p-1 my-1 text-center ${getCurrentDayClass(day)}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setSelectedDay(day);
          setShowEventModel(true);
        }}>
        {eventDay.map((event, index) => (
          <div
            key={index}
            className={`bg-${event.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}>
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
}
