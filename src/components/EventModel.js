import React, { useContext, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";

// Label colors used in Labeling new events, founded in Background Color in tailwindcss
const labelClasses = ["blue", "red", "yellow", "emerald", "purple", "pink"];

export default function EventModel() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState(labelClasses[0]);
  const { selectedDay, setShowEventModel } = useContext(GlobalContext);

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <button onClick={() => setShowEventModel(false)}>
            <span className="material-icons-outlined text-gray-400">close</span>
          </button>
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
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white">
            Confirm
          </button>
        </footer>
      </form>
    </div>
  );
}
