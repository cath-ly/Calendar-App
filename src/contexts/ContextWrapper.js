import dayjs from "dayjs";
import React, { useEffect, useReducer, useState, useMemo } from "react";
import GlobalContext from "./GlobalContext";
import markEventsReducer from "../utils/markEventsReducer";
import initEvents from "../utils/initEvents";

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [showEventModel, setShowEventModel] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [labels, setLabels] = useState([]);
  const [markedEvents, dispatchMarkedEvent] = useReducer(
    markEventsReducer,
    [],
    initEvents
  );

  const filteredEvents = useMemo(() => {
    return markedEvents.filter((event) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(event.label)
    );
  }, [markedEvents, labels]);

  useEffect(() => {
    localStorage.setItem("markedEvents", JSON.stringify(markedEvents));
  }, [markedEvents]);

  useEffect(() => {
    setLabels((prevLabel) => {
      return [...new Set(markedEvents.map((event) => event.label))].map(
        (label) => {
          const currentLabel = prevLabel.find((lb) => lb.label === label);
          return {
            label,
            checked: currentLabel ? currentLabel.checked : true,
          };
        }
      );
    });
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

  function updateLabel(label) {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  }

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
        labels,
        setLabels,
        updateLabel,
        markedEvents,
        dispatchMarkedEvent,
        filteredEvents,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
}
