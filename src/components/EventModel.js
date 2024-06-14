import React, { useContext, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";

// Label colors used in Labeling new events, founded in Background Color in tailwindcss
const labelClasses = ["blue", "red", "yellow", "emerald", "purple", "pink"];

export default function EventModel() {
  const { selectedDay, setShowEventModel, selectedEvent, dispatchMarkedEvent } =
    useContext(GlobalContext);

  // will incorporate single line if/else statements
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");

  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );

  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelClasses.find((lbl) => lbl === selectedEvent.label)
      : labelClasses[0]
  );

  function handleConfirmation(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: selectedDay.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };

    if (selectedEvent) {
      dispatchMarkedEvent({ type: "update", payload: calendarEvent });
      console.log("Successfully updated event!");
    } else {
      dispatchMarkedEvent({ type: "push", payload: calendarEvent });
      console.log("Successfully created event!");
    }

    setShowEventModel(false);
  }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {
              //check this area, stuck on selectedEvent
              selectedEvent && (
                <span
                  onClick={() => {
                    dispatchMarkedEvent({
                      type: "delete",
                      payload: selectedEvent,
                    });
                    console.log("Successfully deleted event!");
                    setShowEventModel(false);
                  }}
                  className="material-icons-outlined text-gray-400 cursor-pointer">
                  delete
                </span>
              )
            }
            <button onClick={() => setShowEventModel(false)}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>

            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            <p>{selectedDay.format("dddd, MMMM DD")}</p>

            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add description"
              value={description}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setDescription(e.target.value)}
            />

            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelClasses.map((label, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(label)}
                  className={`bg-${label}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                  {selectedLabel === label && (
                    <span className="material-icons-outlined text-white text-sm items-center">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleConfirmation}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white">
            Confirm
          </button>
        </footer>
      </form>
    </div>
  );
}
