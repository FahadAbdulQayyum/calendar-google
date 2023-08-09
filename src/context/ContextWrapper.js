import React, {
  useState,
  useEffect,
  useReducer,
  useMemo,
} from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) =>
        evt.id === payload.id ? payload : evt
      );
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}
function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const storageEventsClr = localStorage.getItem("coloredBox");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  const parsedEventsClr = storageEventsClr ? JSON.parse(storageEventsClr) : [];
  // return parsedEvents, parsedEventsClr;
  return parsedEvents;
  // return parsedEventsClr;
}

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [hour, setHour] = useState();
  const [week, setWeek] = useState();
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [labels, setLabels] = useState([]);
  const [coloredBox, setColoredBox] = useState([])
  // const [title, setTitle] = useState(
  //   selectedEvent ? selectedEvent.title : ""
  // );
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
    localStorage.setItem("coloredBox", JSON.stringify(coloredBox));
  }, [savedEvents, coloredBox]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((evt) => evt.label))].map(
        (label) => {
          const currentLabel = prevLabels.find(
            (lbl) => lbl.label === label
          );
          return {
            label,
            checked: currentLabel ? currentLabel.checked : true,
          };
        }
      );
    });
  }, [savedEvents]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  function updateLabel(label) {
    setLabels(
      labels.map((lbl) => (lbl.label === label.label ? label : lbl))
    );
  }

  const selectDay = (day) => {
    console.log('day', day)
    setDaySelected(day)
  }

  // const [state, dispatch] = useReducer(initialState, reducer)

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        hour,
        setHour,
        week,
        setWeek,
        showEventModal,
        setShowEventModal,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        savedEvents,
        setLabels,
        labels,
        updateLabel,
        filteredEvents,
        // nextMonth,
        selectDay,
        // title,
        // setTitle
        coloredBox,
        setColoredBox
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
