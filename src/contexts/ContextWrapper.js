import dayjs from "dayjs";
import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import markEventsReducer from "../utils/markEventsReducer";
import initEvents from "../utils/initEvents";

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [showEventModel, setShowEventModel] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [markedEvents, dispatchMarkedEvent] = useReducer(
    markEventsReducer,
    [],
    initEvents
  );

  useEffect(() => {
    localStorage.setItem("markedEvents", JSON.stringify(markedEvents));
  }, [markedEvents]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  useEffect(() => {
    if (!showEventModel) {
      setSelectedEvent(null);
    }
  }, [showEventModel]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        selectedDay,
        setSelectedDay,
        showEventModel,
        setShowEventModel,
        selectedEvent,
        setSelectedEvent,
        markedEvents,
        dispatchMarkedEvent,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
}
