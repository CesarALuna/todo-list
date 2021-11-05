import React, { useContext, useState } from 'react'
import { TodoContext } from '../context'
import { BsCalendarDate, BsCaretRightFill } from 'react-icons/bs'
import { calendarItems } from '../constants'
import { useSpring, animated } from 'react-spring'

function Calendar() {
  // STATE
  const [showMenu, setShowMenu] = useState(true)

  // CONTEXT
  const { setSelectedProject } = useContext(TodoContext)

  // ANIMATION
  const spin = useSpring({
    transform: showMenu ? 'rotate(90deg)' : 'rotate(0deg)',
    config: { friction: 25 },
  })

  const menuAnimation = useSpring({
    display: showMenu ? 'block' : 'none',
    lineHeight: showMenu ? 1 : 0,
  })

  return (
    <div className="Calendar">
      <div className="header">
        <div className="title">
          <BsCalendarDate size="22" />
          <p>Calendar</p>
        </div>
        <animated.div
          style={spin}
          onClick={() => setShowMenu(!showMenu)}
          className="btns"
        >
          <span>
            <BsCaretRightFill size="22" />
          </span>
        </animated.div>
      </div>
      <animated.div style={menuAnimation} className="items">
        {calendarItems.map((item) => (
          <div
            className="item"
            key={item}
            onClick={() => setSelectedProject(item)}
          >
            {item}
          </div>
        ))}
      </animated.div>
    </div>
  )
}

export default Calendar
