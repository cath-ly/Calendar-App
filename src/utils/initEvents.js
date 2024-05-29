export default function initEvents() {
  const storedEvents = localStorage.getItem("markedEvents");
  let parsedEvents = [];
  if (storedEvents !== null) {
    parsedEvents = JSON.parse(storedEvents);
  }
  return parsedEvents;
}
