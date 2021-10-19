import React, { useContext } from 'react'
import { TodoContext } from '../context'
import { BsCalendarDate, BsCaretUp } from 'react-icons/bs'
import { calendarItems } from './constants'

function Calendar() {
  // CONTEXT
  const { setSelectedProject } = useContext(TodoContext)

  return (
    <div className="Calendar">
      <div className="header">
        <div className="title">
          <BsCalendarDate size="22" />
          <p>Calendar</p>
        </div>
        <div className="btns">
          <span>
            <BsCaretUp size="22" />
          </span>
        </div>
      </div>
      <div className="items">
        {calendarItems.map((item) => (
          <div
            className="item"
            key={item}
            onClick={() => setSelectedProject(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
