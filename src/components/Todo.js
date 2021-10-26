import React, { useState } from 'react'
import {
  BsCheckCircleFill,
  BsCircle,
  BsTrash,
  BsArrowClockwise,
} from 'react-icons/bs'

function Todo({ todo }) {
  const [hover, setHover] = useState(false)

  return (
    <div className="Todo">
      <div
        className="todo-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="check-todo">
          {todo.checked ? (
            <span className="checked">
              <BsCheckCircleFill color="#808080" />
            </span>
          ) : (
            <span className="unchecked">
              <BsCircle color={todo.color} />
            </span>
          )}
        </div>
        <div className="text">
          <p style={{ color: todo.checked ? '#b1b1b1' : '#000000' }}>
            {todo.text}
          </p>
          <span>
            {todo.time} - {todo.projectName}
          </span>
          <div className={`line ${todo.checked ? 'line-through' : ''}`}></div>
        </div>
        <div className="add-to-next-day">
          {todo.checked && (
            <span>
              <BsArrowClockwise />
            </span>
          )}
        </div>
        <div className="delete-todo">
          {(hover || todo.checked) && (
            <span>
              <BsTrash />
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Todo
