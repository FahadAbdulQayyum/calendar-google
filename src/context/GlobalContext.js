import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => { },
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => { },
  daySelected: null,
  setDaySelected: (day) => { },
  setHour: (hr) => { },
  hour: null,
  setWeek: (wk) => { },
  week: null,
  showEventModal: false,
  setShowEventModal: () => { },
  dispatchCalEvent: ({ type, payload }) => { },
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => { },
  setLabels: () => { },
  labels: [],
  updateLabel: () => { },
  filteredEvents: [],
  // nextMonth: () => {},
  selectDay: () => { }
});

export default GlobalContext;
