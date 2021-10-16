import React from 'react'
import { BsCalendarDate, BsCaretUp } from 'react-icons/bs'
import { calendarItems } from './constants'

function Calendar() {
  return (
    <div className="Calendar">
      <div className="header">
        <div className="title">
          <BsCalendarDate size="32" />
          <p>Calendar</p>
        </div>
        <div className="btns">
          <span>
            <BsCaretUp size="30" />
          </span>
        </div>
      </div>
      <div className="items">
        {calendarItems.map((item) => (
          <div className="item" key="item">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
