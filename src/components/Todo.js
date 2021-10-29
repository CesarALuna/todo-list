import React, { useState } from 'react'
import firebase from '../firebase'
import {
  BsCheckCircleFill,
  BsCircle,
  BsTrash,
  BsArrowClockwise,
  BsCheckCircle,
} from 'react-icons/bs'
import moment from 'moment'

function Todo({ todo }) {
  const [hover, setHover] = useState(false)

  const deleteTodo = (todo) => {
    firebase.firestore().collection('todos').doc(todo.id).delete()
  }

  // const checkTodo = (todo) => {
  //   firebase
  //     .firestore()
  //     .collection('todos')
  //     .doc(todo.id)
  //     .update({ checked: !todo.checked })
  // }

  const checkTodo = (todo) => {
    firebase.firestore().collection('todos').doc(todo.id).update({
      checked: !todo.checked,
    })
  }

  const repeatNextDay = (todo) => {
    const nextDayDate = moment(todo.date, 'MM/DD/YYYY').add(1, 'days')

    const repeatedTodo = {
      ...todo,
      checked: false,
      date: nextDayDate.format('MM/DD/YYYY'),
      day: nextDayDate.format('d'),
    }
    delete repeatedTodo.id

    firebase.firestore().collection('todos').add(repeatedTodo)
  }

  return (
    <div className="Todo">
      <div
        className="todo-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="check-todo" onClick={() => checkTodo(todo)}>
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
        <div className="add-to-next-day" onClick={() => repeatNextDay(todo)}>
          {todo.checked && (
            <span>
              <BsArrowClockwise />
            </span>
          )}
        </div>
        <div className="delete-todo" onClick={() => deleteTodo(todo)}>
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
