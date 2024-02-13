import React from 'react'
import logo from '../assets/logo.png'

//using rfc creates this template
export default function CalendarHeader() {
  return (
    <header className="px-4 py-2 flex items-center">
        <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
    </header>
  )
}