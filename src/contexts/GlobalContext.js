import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  selectedDay: null,
  setSelectedDay: (day) => {},
  showEventModel: false,
  setShowEventModel: () => {},
  selectedEvent: null,
  setSelectedEvent: () => {},
  labels: [],
  setLabels: () => {},
  updateLabel: () => {},
  markedEvents: [],
  dispatchMarkedEvent: ({ type, payload }) => {},
});

export default GlobalContext;
