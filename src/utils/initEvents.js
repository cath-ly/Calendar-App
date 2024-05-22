const storedEvents = localStorage.getItem("markedEvents");
export default function initEvents() {
  const parsedEvents = [];
  if (typeof storedEvents !== "undefined") {
    parsedEvents = JSON.parse(storedEvents);
  }
  return parsedEvents;
}
