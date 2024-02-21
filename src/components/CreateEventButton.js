import React from 'react'
import createImg from "../assets/luffy.svg"

export default function CreateEventButton() {
  return (
    <button className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
      <img src={createImg} alt="create_event" className="w-16 h-16"/>
      <span className="pl-3 pr-7"> Create</span>
    </button>
  )
}
